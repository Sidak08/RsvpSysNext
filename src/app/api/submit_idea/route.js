export async function POST(request) {
  try {
    const { idea } = await request.json();
    console.log("Received idea:", idea);

    return new Response(JSON.stringify({ message: "Idea submitted successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error handling submission:", error);
    return new Response(JSON.stringify({ error: "Failed to submit idea" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}