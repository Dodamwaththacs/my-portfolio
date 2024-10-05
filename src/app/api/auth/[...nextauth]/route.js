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
});

export { handler as GET, handler as POST };
