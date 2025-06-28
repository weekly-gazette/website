import db from '@/lib/db';

export async function POST(request) {
    const { data } = await request.json();

    await db.loadInfo();

    const sheet = db.sheetsByIndex[0];

    await sheet.addRow({
        Timestamp: (new Date()).toString(),
        Journalists: data,
    });

    return Response.json({ status: 200 });
}