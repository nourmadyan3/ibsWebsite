import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const clients = await prisma.client.findMany({
            include: {
                industry: true,
            },
        });
        return NextResponse.json(clients);
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { name, industryGroupId } = await request.json();
        const newClient = await prisma.client.create({
            data: {
                name,
                industryGroupId,
            },
        });
        return NextResponse.json(newClient, { status: 201 });
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
} 