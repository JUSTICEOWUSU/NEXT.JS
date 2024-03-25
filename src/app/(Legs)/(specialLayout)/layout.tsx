import React, { ReactNode } from 'react'

function SpecialLayout({children}:{
    children:ReactNode
}) {
  return (
    <div>
        <h3>Special Layout children</h3>
        {
            children
        }
     </div>
  )
}

export default SpecialLayout
