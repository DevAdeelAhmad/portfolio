import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  // Temporary fallback response until Prisma is working
  return NextResponse.json({
    content: `I am a graduate with a degree in BS Software Engineering from COMSATS. I am currently working as a Frontend Team Lead at Greyfibre, while also freelancing on Upwork. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is Next.js, TypeScript, TailwindCSS, and React Native. I am also familiar with Python, Django, and PostgreSQL. I am always looking to learn new technologies and expand my skillset.

When I'm not coding, I enjoy playing video games, and going out with friends and family. I also enjoy learning new things.`
  });
}

export async function POST(request: NextRequest) {
  // Temporary fallback response until Prisma is working
  try {
    const body = await request.json();
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save about' }, { status: 500 });
  }
}
