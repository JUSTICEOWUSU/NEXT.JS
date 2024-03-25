import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest) {
    return NextResponse.redirect(new URL("/", request.url));
}

export default middleware

export const config = {
    matcher:"/profile"
}

