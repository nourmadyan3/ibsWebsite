import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { name, industryGroupId } = await request.json();
        const updatedClient = await prisma.client.update({
            where: { id: parseInt(id, 10) },
            data: {
                name,
                industryGroupId,
            },
        });
        return NextResponse.json(updatedClient);
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        await prisma.client.delete({
            where: { id: parseInt(id, 10) },
        });
        return new NextResponse(null, { status: 204 });
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
} 