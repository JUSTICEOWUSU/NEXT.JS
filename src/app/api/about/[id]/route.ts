import { NextRequest } from "next/server";



export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const searchPRMS = request.nextUrl.searchParams;
   const query =  searchPRMS.get("gist")
    console.log(query)
    return new Response(JSON.stringify(`THE ID IS  ${query}`));
}
