import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export const runtime = 'nodejs'; // Required for file upload

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const date = formData.get('date') as string;
  const image = formData.get('image') as File | null;

  let imageUrl = '';
  if (image) {
    const buffer = Buffer.from(await image.arrayBuffer());
    const ext = path.extname(image.name) || '.jpg';
    const fileName = `${uuidv4()}${ext}`;
    const imagesDir = path.join(process.cwd(), 'public/images');
    await fs.mkdir(imagesDir, { recursive: true }); // Ensure the directory exists
    const filePath = path.join(imagesDir, fileName);
    await fs.writeFile(filePath, buffer);
    imageUrl = `/images/${fileName}`;
  }

  const post = await prisma.blogPost.create({
    data: {
      title,
      content,
      date: new Date(date),
      imageUrl: imageUrl || null,
    },
  });

  return NextResponse.json(post, { status: 201 });
}

export async function GET() {
  const posts = await prisma.blogPost.findMany({ orderBy: { date: 'desc' } });
  return NextResponse.json(posts);
} 