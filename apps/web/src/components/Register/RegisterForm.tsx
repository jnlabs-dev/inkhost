'use client'

import { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/base/Tabs"
import { UserRole, USER_ROLES } from "@/constants/roles"
import { useRouter } from "next/navigation"

type RegisterFormProps = {
  initialType: UserRole
}

export function RegisterForm({ initialType }: RegisterFormProps) {
  const [role, setRole] = useState<RegisterFormProps["initialType"]>(initialType)
  const router = useRouter()

  useEffect(() => {
    router.replace(`/register/${role}`)
  }, [role])

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-semibold text-center mb-6">Create your InkHost account</h1>

      <Tabs value={role} onValueChange={(v) => setRole(v as typeof role)} className="w-full">
        <TabsList className="grid grid-cols-3 w-full mb-6">
        <TabsTrigger value={USER_ROLES.STUDIO}>Studio</TabsTrigger>
          <TabsTrigger value={USER_ROLES.ARTIST}>Artist</TabsTrigger>
          <TabsTrigger value={USER_ROLES.CLIENT}>Client</TabsTrigger>
        </TabsList>

        <TabsContent value={USER_ROLES.STUDIO}>
          {/* Replace with actual Studio form */}
          <div>Studio registration form goes here</div>
        </TabsContent>
        <TabsContent value={USER_ROLES.ARTIST}>
          {/* Replace with actual Artist form */}
          <div>Artist registration form goes here</div>
        </TabsContent>
        <TabsContent value={USER_ROLES.CLIENT}>
          {/* Replace with actual Client form */}
          <div>Client registration form goes here</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
