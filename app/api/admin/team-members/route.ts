import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const teamMembers = await prisma.teamMember.findMany({
            include: {
                group: true,
            },
        });
        return NextResponse.json(teamMembers);
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { name, title, imageUrl, teamGroupId } = await request.json();
        const newTeamMember = await prisma.teamMember.create({
            data: {
                name,
                title,
                imageUrl,
                teamGroupId,
            },
        });
        return NextResponse.json(newTeamMember, { status: 201 });
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
} 