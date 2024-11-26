import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db, schema } from "db";
import NextAuth, { NextAuthConfig } from "next-auth";
import Discord from "next-auth/providers/discord";
import Email from "next-auth/providers/nodemailer";

export const adapter = DrizzleAdapter(db, {
  usersTable: schema.users,
  accountsTable: schema.accounts,
  authenticatorsTable: schema.authenticators,
  sessionsTable: schema.sessions,
  verificationTokensTable: schema.verificationTokens,
});

const authConfig: NextAuthConfig = {
  adapter,
  providers: [
    Discord,
    Email({
      server: "http://localhost:3000",
      from: "info@example.local",
      secret: process.env.AUTH_SECRET!,
      async sendVerificationRequest({ url }) {
        console.log(url);
      },
    }),
  ],
  secret: process.env.AUTH_SECRET!,
  session: { strategy: "database" },
  cookies: {
    sessionToken: { name: "example-session" },
    callbackUrl: { name: "example-callback" },
    csrfToken: { name: "example-csrf" },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
