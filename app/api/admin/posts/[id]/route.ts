import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs/promises';

const prisma = new PrismaClient();

export const runtime = 'nodejs';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  if (post.imageUrl) {
    const imagePath = path.join(process.cwd(), 'public', post.imageUrl);
    try { await fs.unlink(imagePath); } catch {}
  }
  await prisma.blogPost.delete({ where: { id } });
  return NextResponse.json({ message: 'Deleted' });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const formData = await req.formData();
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const date = formData.get('date') as string;
  const image = formData.get('image') as File | null;

  let imageUrl = undefined;
  if (image) {
    const buffer = Buffer.from(await image.arrayBuffer());
    const ext = path.extname(image.name) || '.jpg';
    const fileName = `${Date.now()}_${image.name}`;
    const imagesDir = path.join(process.cwd(), 'public/images');
    await fs.mkdir(imagesDir, { recursive: true });
    const filePath = path.join(imagesDir, fileName);
    await fs.writeFile(filePath, buffer);
    imageUrl = `/images/${fileName}`;
    // Delete old image
    const old = await prisma.blogPost.findUnique({ where: { id } });
    if (old?.imageUrl) {
      const oldPath = path.join(process.cwd(), 'public', old.imageUrl);
      try { await fs.unlink(oldPath); } catch {}
    }
  }

  const updated = await prisma.blogPost.update({
    where: { id },
    data: {
      title,
      content,
      date: new Date(date),
      ...(imageUrl ? { imageUrl } : {}),
    },
  });
  return NextResponse.json(updated);
} 