'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUp } from '@clerk/nextjs'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/base/Tabs'
import { useToast } from "@/components/providers/ToastProvider"
import { Button } from '@/components/ui/base/Button'
import { Role } from '@/types/globals'
import { STUDIO_ROLE, ARTIST_ROLE, CLIENT_ROLE, USER_ROLE_ICON } from '@/constants/roles'
import { useRouter, useSearchParams } from 'next/navigation'
import { RegisterSSOCallbackFormValues, registerSSOCallbackFormSchema } from '@/lib/validation/registerSSOCallbackFormSchema'

export function RegisterSSOCallbackForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { isLoaded, signUp, setActive } = useSignUp();
  const { showToast } = useToast();
  const [isActionPending, setIsActionPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues
  } = useForm<RegisterSSOCallbackFormValues>({
    resolver: zodResolver(registerSSOCallbackFormSchema),
    defaultValues: {
      role: (searchParams.get("role") as Role) || 'artist',
      username: '',
    },
  })

  const role = watch('role')

  const onRoleChange = (roleValue: string) => {
    setValue('role', roleValue as Role);
  };

  const onSubmit = async (data: RegisterSSOCallbackFormValues) => {
    if (!isLoaded) return;
    try {
      setIsActionPending(true);
      await signUp.update({
        username: data.username,
      });
      await signUp.reload();
      console.log("🚀 ~ onSubmit ~ status:", signUp.status);
      if (signUp.status === 'complete') {
        await setActive({ session: signUp.createdSessionId })
        await fetch("/api/user/metadata", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role }),
        });
        router.replace('/profile')
      }
      setIsActionPending(false);
    } catch (err: any) {
      console.error(err);
      showToast({
        variant: 'error',
        title: 'Failed to create account',
        description: err?.message || 'Something went wrong. Please try again or contact support'
      });
      setIsActionPending(false);
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto p-10 space-y-8">
      <p className="text-center text-muted-foreground text-sm mt-1">
        Choose your role and join InkHost today.
      </p>
      <Tabs value={role} onValueChange={onRoleChange} className="w-full">
        <TabsList className="grid grid-cols-3 w-full mb-6">
          <TabsTrigger value={STUDIO_ROLE}>
            <USER_ROLE_ICON.studio className="size-3 mr-1" /> Studio
          </TabsTrigger>
          <TabsTrigger value={ARTIST_ROLE}>
            <USER_ROLE_ICON.artist className="size-3 mr-1" /> Artist
          </TabsTrigger>
          <TabsTrigger value={CLIENT_ROLE}>
            <USER_ROLE_ICON.client className="size-3 mr-1" /> Client
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <form noValidate className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('username')}
          type="text"
          placeholder="Username"
          className="w-full border p-2 rounded-md mt-4"
        />
        {errors.username && <p className="text-red-700 text-sm mt-1">{errors.username.message}</p>}

        <div id="clerk-captcha" />

        <Button type="submit" className="self-center mt-5" loading={isActionPending}>
          Complete as {role.charAt(0).toUpperCase() + role.slice(1)}
        </Button>
      </form>
    </div >
  )
}
