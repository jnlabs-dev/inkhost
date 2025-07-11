'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/base/Button";
import { ARTIST_ROLE } from "@/constants/roles"

export function Navigation() {
  const pathname = usePathname()
  const isOnRegisterPage = pathname?.startsWith("/register");
  const isOnLoginPage = pathname?.startsWith("/login");
  const isOnLandingPage = pathname === '/';
  const isLoggedIn = false;
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/" className="text-xl font-bold">
        InkHost
      </Link>
      <div className="flex items-center gap-4">
        {isOnLandingPage ? (<Link href="/studios" className="text-sm font-medium hover:underline">
          Explore Studios
        </Link>) : null}
        {!isOnLoginPage && !isLoggedIn ? (<Link href="/login">
          <Button>Sign In</Button>
        </Link>) : null}
        {!isOnRegisterPage && !isLoggedIn ? (<Link href={`/register/${ARTIST_ROLE}`}>
          <Button variant="secondary">Sign Up</Button>
        </Link>) : null}
      </div>
    </nav>
  );
}
