import NextAuth, { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import YandexProvider from "next-auth/providers/yandex";
import Postmark from "next-auth/providers/postmark";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    YandexProvider({
      clientId: process.env.AUTH_YANDEX_ID,
      clientSecret: process.env.AUTH_YANDEX_SECRET,
    }),
    Postmark,
  ],

  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config);
