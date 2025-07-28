'use client'

import { useUser, UserButton } from "@clerk/nextjs"
import { PlusIcon } from "lucide-react";

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
          userButtonPopoverActionButtonIconBox: 'basis-auto',
          userButtonPopoverCustomItemButton: 'gap-2 text-sm text-gray-800',
          userButtonPopoverCustomItemButtonIconBox: 'basis-auto',
        }
      }}
    >
      <UserButton.MenuItems>
        {user.publicMetadata.role === 'studio' ? (
          <UserButton.Action
            label="Add studio"
            labelIcon={<PlusIcon className="size-4" />}
            onClick={() => {}}
          />
        ) : null}
        <UserButton.Action label="manageAccount" />
        <UserButton.Action label="signOut" />
      </UserButton.MenuItems>
    </UserButton>
  )
}
