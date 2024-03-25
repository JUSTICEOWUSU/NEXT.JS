"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Profile() {
    const pathName = usePathname();

    console.log(pathName)

    return (
        <>
        <h1>{"let's say hello to profile"}</h1>
        <Link href="/Docs"> Navigate to Docs Page</Link>
        </>
    )
}
