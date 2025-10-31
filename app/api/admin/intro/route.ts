import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  // Temporary fallback response until Prisma is working
  return NextResponse.json({
    name: 'Adeel Ahmad',
    title: 'Software Engineer',
    description: "Hello, I'm Adeel. I'm a Software Engineer with 3+ years of experience. I enjoy building sites & apps. My focus is Next.js, React Native and Gen AI.",
    upworkLink: 'https://www.upwork.com/freelancers/~018ad37dbf86a6b06e',
    linkedinLink: 'https://www.linkedin.com/in/devadeelahmad/',
    githubLink: 'https://github.com/DevAdeelAhmad',
    profileImageUrl: '/profile-pic.jpeg',
  });
}

export async function POST(request: NextRequest) {
  // Temporary fallback response until Prisma is working
  try {
    const body = await request.json();
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save intro' }, { status: 500 });
  }
}
