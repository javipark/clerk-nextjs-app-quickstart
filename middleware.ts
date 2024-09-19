import { NextResponse } from 'next/server';
import { authMiddleware } from "@clerk/nextjs/server";

// This Middleware does not protect any routes by default.
// See https://clerk.com/docs/references/nextjs/clerk-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    "/", 
    "/sign-in(.*)", 
    "/api(.*)",
    "/SignIn_clerk_catchall_check_1726715974499"
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
