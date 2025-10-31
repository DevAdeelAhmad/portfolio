import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Temporary fallback response until cache revalidation is needed
  const searchParams = request.nextUrl.searchParams;
  const tag = searchParams.get('tag');

  if (!tag) {
    return NextResponse.json({ error: 'Tag is required' }, { status: 400 });
  }

  // Just return success for now
  return NextResponse.json({ success: true });
}
