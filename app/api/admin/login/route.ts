import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { serialize } from 'cookie';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    console.log('Login attempt:', { email });

    // Find admin by email
    const admin = await prisma.admin.findUnique({ where: { email } });
    console.log('Found admin:', admin ? 'Yes' : 'No');

    if (!admin || admin.password !== password) {
      console.log('Login failed:', !admin ? 'Admin not found' : 'Password mismatch');
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Set a simple session cookie (for demo; use JWT or encrypted cookie in production)
    const cookie = serialize('admin_session', admin.email, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    const res = NextResponse.json({ message: 'Login successful' });
    res.headers.set('Set-Cookie', cookie);
    return res;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
} 