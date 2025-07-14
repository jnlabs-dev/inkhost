'use client'

import Link from "next/link";
import { useUser } from '@clerk/nextjs'
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/base/Button";
import { ARTIST_ROLE } from "@/constants/roles"
import { CircleUserRound } from "lucide-react"

export function Navigation() {
  const { isSignedIn, user, isLoaded } = useUser();
  const pathname = usePathname()
  const isOnRegisterPage = pathname?.startsWith("/register");
  const isOnLoginPage = pathname?.startsWith("/login");
  const isOnLandingPage = pathname === '/';
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/" className="text-xl font-bold">
        InkHost
      </Link>
      {isLoaded ? <div className="flex items-center gap-4">
        {isOnLandingPage ? (<Link href="/studios" className="text-sm font-medium hover:underline">
          Explore Studios
        </Link>) : null}
        {!isOnLoginPage && !isSignedIn ? (<Link href="/login">
          <Button>Sign In</Button>
        </Link>) : null}
        {!isOnRegisterPage && !isSignedIn ? (<Link href={`/register/${ARTIST_ROLE}`}>
          <Button variant="secondary">Sign Up</Button>
        </Link>) : null}
        {isSignedIn ? (
          <div className="flex items-center gap-2">
            <CircleUserRound className="size-6" />
            {user.username || user.id}
          </div>
        ) : null}

      </div> : null}
    </nav>
  );
}
