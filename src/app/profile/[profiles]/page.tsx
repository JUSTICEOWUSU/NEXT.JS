import React from 'react'
import {notFound }from 'next/navigation'

function Profiles({params}:{params:{profiles:string}}) {
    {
      if (parseInt(params.profiles) > 7) {
        notFound();
      }
    }
  return (
    <>
    <h1>hello profiles with profile {params.profiles}</h1>
    </>
  )
}

export default Profiles