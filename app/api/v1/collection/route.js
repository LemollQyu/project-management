import prisma from "../../../libs/prisma"

export async function POST(request) {
	const { link, email } = await request.json()
	const data = { link, email }
	
	const createCollection = await prisma.collection.create({ data })
	
	if(!createCollection) return Response.json({ status: 500, isCreated: false})
		else return Response.json({ status: 200, isCreated: true })
	
	
	
	
}