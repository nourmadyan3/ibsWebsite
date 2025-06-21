import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename || !request.body) {
    return NextResponse.json({ message: 'Missing filename or body' }, { status: 400 });
  }

  try {
    const blob = await put(filename, request.body, {
      access: 'public',
      addRandomSuffix: true,
    });

    return NextResponse.json(blob);
  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    console.error("Error uploading to Vercel Blob:", errorMessage);
    return NextResponse.json(
      { message: 'Error uploading file.', error: errorMessage },
      { status: 500 }
    );
  }
} 