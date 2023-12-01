import React from 'react'

function page({params}:{params:{routes:string[]}}) {
  return (
    <div>
      {params.routes && params.routes.length === 2 && (
        <h1>
          features id is {params.routes[0]} and their characteristics are
          {params.routes[1]}
        </h1>
      )}
      {params.routes && params.routes.length == 1 && (
        <h1>features id is {params.routes[0]}</h1>
      )}
      { !params.routes && (
        <h1>features homepage is here</h1>
      )}
    </div>
  );
}

export default page