import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { name, title, imageUrl, teamGroupId } = await request.json();
        const updatedTeamMember = await prisma.teamMember.update({
            where: { id: parseInt(id, 10) },
            data: {
                name,
                title,
                imageUrl,
                teamGroupId,
            },
        });
        return NextResponse.json(updatedTeamMember);
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        await prisma.teamMember.delete({
            where: { id: parseInt(id, 10) },
        });
        return new NextResponse(null, { status: 204 });
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
} 