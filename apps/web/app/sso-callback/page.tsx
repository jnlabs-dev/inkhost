'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSignUp, useClerk } from '@clerk/nextjs'
import { Shell } from "@/components/layout/Shell"
import { RegisterSSOCallbackForm } from "@/components/Register/RegisterSSOCallbackForm"
import { Loader2 } from "lucide-react"

export default function RegisterSSOCallbackHandler() {
  const router = useRouter()
  const { setActive } = useClerk();
  const { signUp } = useSignUp();

  useEffect(() => {
    async function handleCallback() {
      if (signUp?.status === 'complete') {
        await setActive({ session: signUp.createdSessionId })
        router.replace('/profile')
      }
    }
    handleCallback()
  }, [signUp?.status, signUp?.createdSessionId, router, setActive])

  if (signUp?.status === 'missing_requirements') {
    return (
      <Shell className='w-full max-w-xl mx-auto p-10 space-y-8'>
        <h1 className="text-center text-2xl font-bold">
          Complete registration
        </h1>
        <RegisterSSOCallbackForm />
      </Shell>
    )
  }

  return (
    <Shell className='w-full h-full flex items-center justify-center gap-2'>
      <Loader2 className="animate-spin size-8" />
      <h1 className='text-lg'>
        Completing registration...
      </h1>
    </Shell>
  )
}