"use client"

import React from 'react'
import { usePathname, notFound } from "next/navigation";
import Link from 'next/link'
import { Metadata } from 'next'


type props = {
  params: {
    profiles : string
  }
}

// export const generateMetadata = ({params}:props): Metadata => {
//   return {
//     title: `This is the title for id ${params.profiles}`
//   }
// }

function Profiles({ params }: props) {

    const pathName = usePathname();

  
  const profileID : number = parseInt(params.profiles)
    {
      if ( profileID > 7 || typeof(profileID) !== "number") {
        return notFound();
      }
  }
  

  return (
    <>
      <h1>hello profiles with profile {params.profiles}</h1>
      <Link
        href={"/profile/1"}
        style={{
          padding: "5px",
          textDecoration: "none",
          fontStyle: `${pathName === "/profile/1" && "bold"}`,
          color: `${pathName === "/profile/1" && "red"}`,
        }}
      >
        navigate to profile 1
      </Link>
      <Link
        href={"/profile/2"}
        style={{
          padding: "5px",
          textDecoration: "none",
          fontStyle: `${pathName === "/profile/2" && "bold"}`,
          color: `${pathName === "/profile/2" && "red"}`,
        }}
      >
        navigate to profile 2
      </Link>
      <Link
        href={"/profile/3"}
        style={{
          padding: "5px",
          textDecoration: "none",
          fontStyle: `${pathName === "/profile/3" && "bold"}`,
          color: `${pathName === "/profile/3" && "red"}`,
        }}
      >
        navigate to profile 3
      </Link>
    </>
  );
}

export default Profiles
