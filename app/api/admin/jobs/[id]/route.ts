import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET a single job post by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const job = await prisma.jobPost.findUnique({
      where: { id: Number(params.id) },
    });
    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }
    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch job' }, { status: 500 });
  }
}

// UPDATE a job post by ID
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    const job = await prisma.jobPost.update({
      where: { id: Number(params.id) },
      data: {
        code: data.code,
        text: data.text,
        position: data.position,
        contractDuration: data.contractDuration,
        field: data.field,
        workLocation: data.workLocation,
        workingHours: data.workingHours,
        daysOff: data.daysOff,
        insurance: data.insurance,
        jobDescription: data.jobDescription,
        qualifications: data.qualifications,
        howToApply: data.howToApply,
      },
    });
    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update job' }, { status: 500 });
  }
}

// DELETE a job post by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.jobPost.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json({ message: 'Job deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
  }
} 