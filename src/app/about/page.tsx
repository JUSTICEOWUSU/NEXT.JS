"use client"

import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

// export const metadata = {
//   title: "About Linmarketix",
//   description:"This is the about page"
// }

// const RequestData = async () => {
//   const data = await fetch("http://localhost:3000/api/about");
//   return await data.json()
// }

// export default function about() {
//   const Router = useRouter();

  // // const data = await RequestData();
  // console.log(data);

//   const navigateToDifferentRoute : MouseEventHandler  = ():void => {
//      Router.push("/profile");
//   };

//   return
//     <h1 onClick={navigateToDifferentRoute}>hello about</h1>
// };

import React from 'react'

 function AboutPage() {
  const requestData = async () => {
    const data = await fetch("http://localhost:3000/api/about");
    return await data.json();
  }

  // const data = await requestData()
  // const RouterNavigate = useRouter();

  return <div>
    ABOUT PAGE
  </div>;
}

export default AboutPage
