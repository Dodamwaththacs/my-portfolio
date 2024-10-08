import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

console.log("Keycloak Issuer:", process.env.KEYCLOAK_ISSUER);

const handler = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  debug: true,
  logger: {
    error: (code, metadata) => {
      console.error("NextAuth Error:", code, metadata);
    },
    warn: (code) => {
      console.warn("NextAuth Warning:", code);
    },
    debug: (code, metadata) => {
      console.log("NextAuth Debug:", code, metadata);
    },
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Add access_token and id_token to the token right after sign in
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Add access_token and id_token to the session
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      console.log("this is Session on route :", session);
      return session;
    },
  },
});

export { handler as GET, handler as POST };
