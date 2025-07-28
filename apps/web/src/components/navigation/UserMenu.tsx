'use client'

import { useUser, UserButton } from "@clerk/nextjs"

export function UserMenu() {
  const { user } = useUser()

  if (!user) return null;

  return (
    <UserButton
      showName={true}
      userProfileMode="navigation"
      userProfileUrl="/profile"
      appearance={{
        elements: {
          userButtonOuterIdentifier: 'text-sm',
          userButtonPopoverCard: 'w-[280px]',
          userButtonPopoverFooter: 'hidden',
          userButtonPopoverActionButton: 'gap-2 text-sm text-gray-800',
          userButtonPopoverActionButtonIconBox: 'basis-auto'
        }
      }}
    />
  )
}
