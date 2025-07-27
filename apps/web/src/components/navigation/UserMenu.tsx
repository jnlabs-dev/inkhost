'use client'

import { UserButton, useUser, SignOutButton } from "@clerk/nextjs"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/base/DropdownMenu"
import { useRouter } from "next/navigation"

export function UserMenu() {
  const { user } = useUser()
  const router = useRouter()

  if (!user) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2">
          <UserButton afterSignOutUrl="/" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push("/profile")}>
          Profile
        </DropdownMenuItem>
        <SignOutButton>
          <DropdownMenuItem>
            Log out
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
