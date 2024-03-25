// export  const dynamic = "force-dynamic"

import { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { headers,cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const Cookies = cookies()
    const getHeaders = new Headers(request.headers);
    const authHeader = getHeaders.get("Authorization");
    console.log(authHeader);
    const nHeaders = headers();
    console.log("----------------------------------------------");
    
    console.log(nHeaders.get("authorization"));
    Cookies.set("ATO", "brother");
    console.log(Cookies.get("book"));

    const time = new Date().toLocaleTimeString();

    return Response.json({time},{
        headers: {
            "set-cookie": "james=yellow,book=logs",
        }
    });
}
