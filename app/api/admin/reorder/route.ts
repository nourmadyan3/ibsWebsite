import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { type, items } = await request.json();

        const transactions = [];

        if (type === 'team-groups') {
            for (const item of items) {
                transactions.push(prisma.teamGroup.update({
                    where: { id: item.id },
                    data: { order: item.order },
                }));
            }
        } else if (type === 'team-members') {
            for (const item of items) {
                transactions.push(prisma.teamMember.update({
                    where: { id: item.id },
                    data: { order: item.order },
                }));
            }
        } else if (type === 'industry-groups') {
            for (const item of items) {
                transactions.push(prisma.industryGroup.update({
                    where: { id: item.id },
                    data: { order: item.order },
                }));
            }
        } else if (type === 'clients') {
            for (const item of items) {
                transactions.push(prisma.client.update({
                    where: { id: item.id },
                    data: { order: item.order },
                }));
            }
        } else {
            return new NextResponse('Invalid type', { status: 400 });
        }

        await prisma.$transaction(transactions);

        return new NextResponse('Order updated', { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
} 