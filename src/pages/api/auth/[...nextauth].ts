//Next-Auth did not support the api routes in the /app dir, so it's done in the regular pages dir, everything else is in the /app dir.

import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

export default NextAuth(authOptions)