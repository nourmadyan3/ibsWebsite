import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  const cookie = serialize('admin_session', '', {
    httpOnly: true,
    path: '/',
    maxAge: 0, // Expire immediately
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  const response = NextResponse.json({ message: 'Logged out successfully' });
  response.headers.set('Set-Cookie', cookie);
  return response;
} 