import { NextRequest } from "next/server";

const aboutData = {
    name: "joe",
    bank: "broke",
    amount: "0",
    location:"united state"
}


export async function GET(request: NextRequest) {
    const searchPRMS = request.nextUrl.searchParams;
    
   const query = searchPRMS.get("gist")
    console.log(query)
    return new Response(JSON.stringify(query? `THE ID IS  ${query}` : aboutData));
}


export async function POST(request: Request) {
    const txt = await request.json()
    console.log(txt);
    
    console.log(request.headers);
    
    return new Response(JSON.stringify(txt), {
        headers: {
            "Content-Type":"application/json"
        }
    })
}
