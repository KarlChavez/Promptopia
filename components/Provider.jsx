"use client";

import { SessionProvider } from "next-auth/react";
const Provider = ({ children, session }) => {
  // It's a higher order component that wraps your app in the SessionProvider component.
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
