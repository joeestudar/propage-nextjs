import Stripe from "stripe";

export async function POST(request: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-05-27.dahlia",
    });
    const body = await request.json();
    const { name, email, businessName, phone, template, details } = body;

    if (!name || !email || !businessName) {
      return Response.json(
        { error: "Name, email, and business name are required." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "ProPage Landing Page",
            },
            unit_amount: 4000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url:
        "https://propages.shalomsites.com.br/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://propages.shalomsites.com.br/#order",
      customer_email: email,
      metadata: {
        name,
        businessName,
        phone: phone || "",
        template: template || "",
        details: details || "",
      },
    });

    return Response.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return Response.json(
      { error: error.message || "Failed to create checkout session." },
      { status: 500 }
    );
  }
}
