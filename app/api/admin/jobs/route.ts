import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all job posts
export async function GET() {
  try {
    const jobs = await prisma.jobPost.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}

// CREATE a new job post
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const job = await prisma.jobPost.create({
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
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
  }
} 