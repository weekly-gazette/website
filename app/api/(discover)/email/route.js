import db from '@/lib/db';

export async function POST(request) {
    const { data } = await request.json();

    await db.loadInfo();

    const sheet = db.sheetsByIndex[1];

    await sheet.addRow({
        Timestamp: (new Date()).toString(),
        Email: data,
    });

    return Response.json({ status: 200 });
}