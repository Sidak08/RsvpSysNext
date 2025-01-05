import Stripe from "stripe";
import { NextResponse } from "next/server";
import clientPromise from "../../components/mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Stripe webhook secret is not set" }, { status: 500 });
  }

  const payload = await req.text();
  const sig = req.headers.get("Stripe-Signature");

  try {
    const event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);
    console.log("Received event:", event.type);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const customerEmail = session.customer_details.email;

      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 1 });
      const productName = lineItems.data[0].description;

      const client = await clientPromise;
      const db = client.db();

      const user = await db.collection("users").findOne({ email: customerEmail.toLowerCase() });

      if (user) {
        await db.collection("users").updateOne(
          { email: customerEmail.toLowerCase() },
          {
            $set: {
              subscription: {
                plan: productName,
                product: lineItems.data[0].price.product,
                interval: lineItems.data[0].price.recurring.interval,
              },
            },
          }
        );
        console.log(`Updated subscription for user: ${customerEmail}`);
      } else {
        // Send email telling them to link account
        console.log(`User not found: ${customerEmail}. Sending email to link account.`);
      }
    }

    return NextResponse.json({ status: "success", event: event.type });
  } catch (err) {
    console.error("Error processing webhook event:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}