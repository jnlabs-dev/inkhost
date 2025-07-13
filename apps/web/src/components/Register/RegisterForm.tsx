'use client'

import { FormEventHandler, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUp } from '@clerk/nextjs'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/base/Tabs'
import { Button } from '@/components/ui/base/Button'
import { Role } from '@/types/globals'
import { STUDIO_ROLE, ARTIST_ROLE, CLIENT_ROLE, USER_ROLE_ICON } from '@/constants/roles'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PasswordStrengthBar } from '@/components/Register/PasswordStrengthBar'
import { RegisterFormValues, registerFormSchema } from '@/lib/validation/registerFormSchema'

type RegisterFormProps = {
  initialRole: Role
}

export function RegisterForm({ initialRole }: RegisterFormProps) {
  const router = useRouter()
  const [isVerificationPending, setIsVerificationPending] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const { isLoaded, signUp } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      role: initialRole,
      email: '',
      password: ''
    },
  })

  const role = watch('role')
  const password = watch('password')

  useEffect(() => {
    setValue('role', initialRole)
  }, [initialRole, setValue])

  const onRoleChange = (roleValue: string) => {
    setValue('role', roleValue as Role);
  };

  const onSubmit = async (data: RegisterFormValues) => {
    console.log('Form data:', data)
    if (!isLoaded) return;
    try {
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
        username: data.username,
      });
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setIsVerificationPending(true);
    } catch (err) {
      console.error(err);
    }
  }

  const onVerify: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verificationCode
      })
      if (completeSignUp.status === 'complete') {
        console.log("🚀 ~ completeSignUp complete", completeSignUp);
      } else {
        console.log("🚀 ~ completeSignUp not complete", completeSignUp);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-10 space-y-8">
      <h1 className="text-center text-2xl font-bold">Create Your Account</h1>
      {!isVerificationPending ? (
        <>
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

          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded-md"
            />
            {errors.email && <p className="text-red-700 text-sm">{errors.email.message}</p>}

            <input
              {...register('username')}
              type="text"
              placeholder="Username"
              className="w-full border p-2 rounded-md mt-4"
            />
            {errors.username && <p className="text-red-700 text-sm mt-1">{errors.username.message}</p>}

            <input
              {...register('password')}
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded-md mt-4"
            />
            {errors.password && <p className="text-red-700 text-sm mt-1">{errors.password.message}</p>}

            <PasswordStrengthBar className='mt-1' password={password} />

            <div id="clerk-captcha" />

            <Button type="submit" className="self-center mt-5">
              Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
            </Button>
          </form>

          <div className="text-center text-muted-foreground text-sm">or continue with</div>

          <div className="flex flex-col gap-2">
            <Button variant="outline" className="w-full">
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full">
              Continue with Facebook
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <Link href="/login" className="underline">Sign in</Link>
          </p>
        </>
      ) : (
        <>
          <h3 className="text-center text-lg mt-4">Confirm your email</h3>

          <form className="flex flex-col" onSubmit={onVerify}>
            <input
              type="number"
              placeholder="Enter verification code"
              className="w-full border p-2 rounded-md"
              value={verificationCode}
              onChange={e => setVerificationCode(e.target.value)}
            />
            <Button type="submit" disabled={!verificationCode} className="self-center mt-5">
              Verify Email
            </Button>
          </form>
        </>
      )}
    </div >
  )
}
