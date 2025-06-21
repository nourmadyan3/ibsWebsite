import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const industryGroups = await prisma.industryGroup.findMany({
            include: {
                clients: {
                    orderBy: {
                        order: 'asc',
                    },
                },
            },
            orderBy: {
                order: 'asc',
            },
        });
        return NextResponse.json(industryGroups);
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
} 