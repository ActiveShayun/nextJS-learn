import dbConnect from "@/lib/dbConect";


export async function GET() {

    const data = await dbConnect('menu').find({}).toArray();
    console.log(data);
    return Response.json(data)
}
export async function POST(req) {

    const data = await req.json();
    const result = await dbConnect('all-demoPost').insertOne(data)

    return Response.json({ result })
}