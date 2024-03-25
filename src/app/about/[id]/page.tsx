import React from 'react'

function KillID({params}:{params:{id:string}}) {
  return (
      <div>This is the page for id { params.id} in the about route</div>
  )
}

export default KillID
