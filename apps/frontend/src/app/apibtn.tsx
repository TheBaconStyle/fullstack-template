"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function ApiBtn() {
  const { status } = useSession();

  return (
    <div>
      {status === "unauthenticated" && (
        <>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {status === "authenticated" && (
        <button onClick={() => signOut()}>SignOut</button>
      )}
    </div>
  );
}
