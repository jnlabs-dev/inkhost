import { Suspense } from "react"

import { Shell } from "@/components/layout/Shell"
import { RegisterForm } from "@/components/Register/RegisterForm"

export default async function RegisterPage() {
  return <Shell>
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  </Shell>
}

export async function generateMetadata() {
  return {
    title: 'Create account',
  }
}