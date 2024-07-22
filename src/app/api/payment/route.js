import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import clientPromise from "../../components/mongodb";

const stripe = new Stripe(process.env.STRIPE);
export async function POST(req, res) {
  const payload = await req.text();
  const response = JSON.parse(payload);
  const client = await clientPromise;
  const db = client.db();

  const sig = req.headers.get("Stripe-Signature");

  const dateTime = new Date(response?.created * 1000).toLocaleDateString();
  const timeString = new Date(response?.created * 1000).toLocaleDateString();

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
    console.log("event", event.type);
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const customerEmail = session.customer_details.email;

      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id,
        { limit: 1 },
      );
      const productName = lineItems.data[0].description;

      const user = await db
        .collection("users")
        .findOne({ email: customerEmail.toLowerCase() });

      if (user) {
        const works = await db.collection("users").updateOne(
          { email: customerEmail.toLowerCase() },
          {
            $set: {
              subscription: {
                plan: lineItems.data[0].description,
                product: lineItems.data[0].price.product,
                interval: lineItems.data[0].price.recurring.interval,
              },
            },
          },
        );
      } else {
        //send email telling them to link account
      }
    }

    return NextResponse.json({ status: "success", event: event.type });
  } catch (err) {
    console.log(err);
  }
}
