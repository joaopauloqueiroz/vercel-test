// import { FirestoreAdapter } from "@auth/firebase-adapter";
import GoogleProvider from "next-auth/providers/google";

// import { cert } from "firebase-admin/app";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";

export interface RootSession {
  data: Data;
  status: string;
}

export interface Data {
  user: User;
  expires: string;
}

export interface User {
  id: string;
  image: string;
  emailVerified: any;
  name: string;
  email: string;
}

const authOptions: NextAuthOptions = {
  secret: process.env.GOOGLE_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    session({ session, user, token }) {
      return {
        ...session,
        user,
        token,
      };
    },
  },
};

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
