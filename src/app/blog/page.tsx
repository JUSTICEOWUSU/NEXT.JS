"use client"
import Link from "next/link";

export default function Blog() {
  // const rand: number = Math.floor(Math.random() * 3)
  
  // if (rand === 2) {
  //               throw new Error("A PAGE error occured so try again later"); 
  //   }

  return (
    <>
      <h1>hello Blog</h1>
      <Link  href={'/profile'}> Go back to the profiles page</Link>
    </>
  );
}
