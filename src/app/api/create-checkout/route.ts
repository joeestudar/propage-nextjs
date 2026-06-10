import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error: "Payment is handled on delivery only. This endpoint is disabled.",
    },
    { status: 410 }
  );
}
