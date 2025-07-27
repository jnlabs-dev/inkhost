import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  '/',
  '/login',
  '/register(.*)',
  '/studios',
  '/artists'
])
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Skip all /api/* routes
  if (req.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  const { userId, sessionClaims } = await auth();

  // If the user isn't signed in and the route is private, redirect to sign-in
  if (!userId && !isPublicRoute(req)) {
    const url = new URL("/login", req.url);
    return NextResponse.redirect(url);
  }

  if (isAdminRoute(req) && sessionClaims?.metadata?.role !== "admin") {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
