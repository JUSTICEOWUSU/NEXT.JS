"use client"

import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
   
  return (
    <div>
      <h1 style={{ color: "blue" }}>TESTING THE BLOG ERROR</h1>
      {children}
      <h2 style={{ color: "yellow" }}>product footer</h2>
    </div>
  );
}

export default layout;
