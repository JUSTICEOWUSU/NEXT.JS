import React from 'react'

function page({params}:{params:{routes:string[]}}) {
  return (
    <div>
        {params.routes.length === 2 && (<h1>{params.routes[1]}</h1>)}
    </div>
  )
}

export default page