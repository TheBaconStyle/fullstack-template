"use client";

import { checkSession } from "@/actions/auth";
import { signIn, signOut, useSession } from "next-auth/react";

export function ApiBtn() {
  const { status } = useSession();

  return (
    <>
      <div>
        <button
          onClick={() => {
            checkSession().then(JSON.stringify).then(alert);
          }}
        >
          CheckSession
        </button>
      </div>
      <div>
        {status === "unauthenticated" && (
          <>
            <button onClick={() => signIn("discord", { redirectTo: "/" })}>
              Sign in through discord
            </button>
            <button
              onClick={() => {
                signIn("nodemailer", {
                  email: "maks.christmas2001@gmail.com",
                  redirectTo: "/",
                });
              }}
            >
              Sign in through email
            </button>
          </>
        )}
        {status === "authenticated" && (
          <button onClick={() => signOut()}>SignOut</button>
        )}
      </div>
    </>
  );
}
