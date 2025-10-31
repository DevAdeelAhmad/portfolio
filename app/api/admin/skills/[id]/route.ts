import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Temporary fallback response until Prisma is working
  try {
    const body = await request.json();
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update skill' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Temporary fallback response until Prisma is working
  return NextResponse.json({ success: true });
}
