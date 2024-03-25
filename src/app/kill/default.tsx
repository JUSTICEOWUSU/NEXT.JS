import React from "react";
import Link from "next/link";
import Card from "@/components/card/card";

function Kill() {
  return (
    <>
      <div>DASHBOARD PAGE </div>
      <Link href={"/kill/blessed"}> link to the blessed page</Link>
      <Card />
    </>
  );
}

export default Kill;
