'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/base/Button'
import { PasswordInput } from '@/components/ui/PasswordInput/PasswordInput'
import { useToast } from "@/components/providers/ToastProvider"
import Link from 'next/link'
import { LoginFormValues, loginFormSchema } from '@/lib/validation/loginFormSchema'

export function LoginForm() {
  const router = useRouter()
  const { showToast } = useToast();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [isActionPending, setIsActionPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      identifier: '',
      password: ''
    },
  });


  const onSubmit = async (data: LoginFormValues) => {
    if (!isLoaded) return;
    try {
      setIsActionPending(true);
      const signInAttempt = await signIn.create({
        identifier: data.identifier,
        password: data.password,
      })
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        setIsActionPending(false);
        router.push('/profile')
      }
    } catch (err: any) {
      setIsActionPending(false);
      console.error(err);
      showToast({
        variant: 'error',
        title: 'Failed to create account',
        description: err?.message || 'Something went wrong. Please try again or contact support'
      });
    }
  }

  return (
    <div className="max-w-xl mx-auto p-10 space-y-8">
      <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

      <form noValidate className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('identifier')}
          placeholder="Username or email"
          className="w-full border p-2 rounded-md"
        />
        {errors.identifier && <p className="text-red-700 text-sm">{errors.identifier.message}</p>}

        <PasswordInput
          {...register('password')}
          placeholder="Password"
          containerClassName="mt-4"
        />
        {errors.password && <p className="text-red-700 text-sm mt-1">{errors.password.message}</p>}

        <div id="clerk-captcha" />

        <Button type="submit" className="self-center mt-5 w-[120px]" loading={isActionPending}>
          Login
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        New here? <Link href="/login" className="underline">Create an account</Link>
      </p>
    </div>
  )
}
