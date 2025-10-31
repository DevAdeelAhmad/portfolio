import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // Temporary fallback response until Prisma is working
  return NextResponse.json([]);
}

export async function POST(request: NextRequest) {
  // Temporary fallback response until Prisma is working
  try {
    const body = await request.json();
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
