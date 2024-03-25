import React from "react";
import Link from "next/link";

function DefaultNotification() {
  return (
    <>
      <div>NOTIFICATION PAGE</div>
      <Link href="/kill/noted"> Go to the noted page</Link>
    </>
  );
}

export default DefaultNotification;
