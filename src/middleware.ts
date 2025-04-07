import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

// Match protected routes
const isProtectedRoute = createRouteMatcher([
  "/",              // homepage
  "/dashboard(.*)", // example: all /dashboard routes
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); // ⬅️ await this!

  if (isProtectedRoute(req) && !userId) {
    // Redirect unauthenticated users to the sign-in page
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Allow access
  return NextResponse.next();

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};