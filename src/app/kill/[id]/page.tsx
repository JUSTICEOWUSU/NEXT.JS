import React from 'react'

function KillId({params}:{params:{id:string}}) {
  return (
      <div>This is the page for id { params.id}</div>
  )
}

export default KillId
