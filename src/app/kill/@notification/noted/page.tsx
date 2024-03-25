"use client"

import Link from 'next/link';
import React from 'react';

function Noted() {
    return (
      <>
            <div>This is the noted page</div>
            <Link href={"/kill"}>Go back to default page</Link>
      </>
    );
}

export default Noted
