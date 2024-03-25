"use client"
import React from 'react';

function Error({ error, reset }: { error:Error, reset:() => void }
): React.JSX.Element {
  return (
    <>
      <h1> An error occured: {error.message}</h1>
      <button onClick={reset}>try again</button>
    </>
  )
}

export default Error
