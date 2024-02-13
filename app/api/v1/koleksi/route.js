import prisma from "../../../libs/prisma"

export async function POST(request) {
	const { link, email, kata } = await request.json()
	const data = { link, email, kata }
	
	const createkoleksi = await prisma.koleksi.create({ data })
	
	if(!createkoleksi) return Response.json({ status: 500, isCreated: false})
		else return Response.json({ status: 200, isCreated: true })
	
	
	
	
}