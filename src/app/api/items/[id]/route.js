import dbConnect from "@/lib/dbConect"
import { ObjectId } from "mongodb"

export async function GET(req, { params }) {

    const p = params.id
    const singlePost = await dbConnect('all-demoPost').findOne({ _id: new ObjectId(p) })


    return Response.json(singlePost)
}
export async function PATCH(req, { params }) {
    const p = params.id
    const data = await req.json()
    const filter = { _id: new ObjectId(p) }
    const updatedContent = await dbConnect('all-demoPost').updateOne(filter, { $set: { ...data } }, { upsert: true })


    return Response.json(updatedContent)
}