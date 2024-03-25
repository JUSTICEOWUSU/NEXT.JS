import React from "react";

function Layout({
  children,
  computer,
  auth,
  notification,
  locks,
}: {
  children: React.ReactNode;
    computer: React.ReactNode;
    auth: React.ReactNode;
  notification: React.ReactNode;
  locks: React.ReactNode;
  }) {
  const isAuth:boolean =true
  return isAuth ? 
    <div>
      <div>{children}</div>
      <div>{notification}</div>
      <div>{computer}</div>
      <div>{auth}</div>
      <div>{locks}</div>
    </div>
   : 
    <div>{auth}</div>
  ;
}

export default Layout;
