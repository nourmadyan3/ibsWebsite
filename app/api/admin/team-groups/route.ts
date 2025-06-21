import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const teamGroups = await prisma.teamGroup.findMany({
            include: {
                members: {
                    orderBy: {
                        order: 'asc',
                    },
                },
            },
            orderBy: {
                order: 'asc',
            },
        });
        return NextResponse.json(teamGroups);
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
} 