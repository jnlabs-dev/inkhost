'use client'

import { useEffect, useState } from "react"
import { SignUpButton } from "@clerk/nextjs"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/base/Tabs"
import { Button } from "@/components/ui/base/Button"
import { Role } from '@/types/globals'
import { STUDIO_ROLE, ARTIST_ROLE, CLIENT_ROLE, USER_ROLE_ICON } from "@/constants/roles"
import { useRouter } from "next/navigation"
import Link from "next/link"

type RegisterFormProps = {
  initialType: Role
}

export function RegisterForm({ initialType }: RegisterFormProps) {
  const [role, setRole] = useState<RegisterFormProps["initialType"]>(initialType)
  const router = useRouter()

  useEffect(() => {
    router.replace(`/register/${role}`)
  }, [role])

  return (
    <div className="w-full max-w-xl mx-auto p-10 space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create Your Account</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Choose your role and join InkHost today.
        </p>
      </div>

      <Tabs value={role} onValueChange={(v) => setRole(v as typeof role)} className="w-full">
        <TabsList className="grid grid-cols-3 w-full mb-6">
          <TabsTrigger value={STUDIO_ROLE}>
            <USER_ROLE_ICON.STUDIO className="size-3 mr-1" />
            Studio
          </TabsTrigger>
          <TabsTrigger value={ARTIST_ROLE}>
            <USER_ROLE_ICON.ARTIST className="size-3 mr-1" />
            Artist
          </TabsTrigger>
          <TabsTrigger value={CLIENT_ROLE}>
            <USER_ROLE_ICON.CLIENT className="size-3 mr-1" />
            Client
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded-md"
        />
        <Button type="submit" className="self-center">
          Sign Up as {role.charAt(0).toUpperCase() + role.slice(1).toLowerCase()}
        </Button>
      </form>

      <div className="text-center text-muted-foreground text-sm">or continue with</div>

      <div className="flex flex-col gap-2">
        <SignUpButton mode="modal">
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
        </SignUpButton>
        <SignUpButton mode="redirect">
          <Button variant="outline" className="w-full">
            Continue with Facebook
          </Button>
        </SignUpButton>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account? <Link href="/login" className="underline">Sign in</Link>
      </p>
    </div>
  )
}
