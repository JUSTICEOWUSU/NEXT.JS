import React from 'react'
import Link from 'next/link'

function Tuber() {
    return (
      <>
            <div>Tuber page right here</div>
            <Link href={"/order/yam"}>Move the top page</Link>
      </>
    );
}

export default Tuber
