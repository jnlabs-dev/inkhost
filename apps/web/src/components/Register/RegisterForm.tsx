'use client'

import { FormEventHandler, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { OAuthStrategy } from '@clerk/types'
import { useSignUp } from '@clerk/nextjs'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/base/Tabs'
import { useToast } from "@/components/providers/ToastProvider"
import { Button } from '@/components/ui/base/Button'
import { PasswordInput } from '@/components/ui/PasswordInput/PasswordInput'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { Role } from '@/types/globals'
import { STUDIO_ROLE, ARTIST_ROLE, CLIENT_ROLE, USER_ROLE_ICON } from '@/constants/roles'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { PasswordStrengthBar } from '@/components/Register/PasswordStrengthBar'
import { RegisterFormValues, registerFormSchema } from '@/lib/validation/registerFormSchema'

type PendingAction = 'submitWithEmail' | 'submitWithGoogle' | 'submitWithFacebook' | 'emailVerification' | null;

export function RegisterForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentPendingAction, setCurrentPendingAction] = useState<PendingAction>(null);
  const [isVerificationPending, setIsVerificationPending] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const { isLoaded, signUp, setActive } = useSignUp();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      role: (searchParams.get("role") as Role) || 'artist',
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
  })

  const role = watch('role')
  const password = watch('password')

  const onRoleChange = (roleValue: string) => {
    router.replace(`/register?role=${roleValue}`)
    setValue('role', roleValue as Role);
  };

  const onSubmit = async (data: RegisterFormValues) => {
    if (!isLoaded) return;
    try {
      setCurrentPendingAction('submitWithEmail');
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName
      });
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setIsVerificationPending(true);
      setCurrentPendingAction(null);
    } catch (err: any) {
      console.error(err);
      showToast({
        variant: 'error',
        title: 'Failed to create account',
        description: err?.message || 'Something went wrong. Please try again or contact support'
      });
      setCurrentPendingAction(null);
    }
  }

  const onVerify: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    try {
      setCurrentPendingAction('emailVerification');
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verificationCode
      })
      setCurrentPendingAction(null);
      if (completeSignUp.status === 'complete') {
        const selectedRole = getValues('role');
        await setActive({ session: completeSignUp.createdSessionId });
        await fetch("/api/user/metadata", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role: selectedRole }),
        });
        router.push('/profile');
      }
    } catch (err: any) {
      console.error(err);
      showToast({
        variant: 'error',
        title: 'Failed to verify email address',
        description: err?.message || 'Something went wrong. Please try again or contact support'
      });
      setCurrentPendingAction(null);
    }
  };

  const signUpWith = (strategy: OAuthStrategy) => {
    if (!isLoaded) return;
    setCurrentPendingAction(strategy === 'oauth_facebook' ? 'submitWithFacebook' : 'submitWithGoogle')
    return signUp
      .authenticateWithRedirect({
        strategy,
        redirectUrl: `/register/sso-callback?role=${role}`,
        redirectUrlComplete: '/profile',
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err: any) => {
        console.error(err);
        showToast({
          variant: 'error',
          title: 'Failed to create account',
          description: err?.message || 'Something went wrong. Please try again or contact support'
        });
      })
      .finally(() => {
        setCurrentPendingAction(null)
      })
  }

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

          <form noValidate className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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

            <div className='flex mt-4 gap-2'>
              <div className="flex-1">
                <input
                  {...register('firstName')}
                  placeholder="First name (optional)"
                  className="w-full border p-2 rounded-md"
                />
                {errors.firstName && <p className="text-red-700 text-sm">{errors.firstName.message}</p>}
              </div>

              <div className="flex-1">
                <input
                  {...register('lastName')}
                  placeholder="Last name (optional)"
                  className="w-full border p-2 rounded-md"
                />
                {errors.lastName && <p className="text-red-700 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>

            <PasswordInput
              {...register('password')}
              placeholder="Password"
              containerClassName="mt-4"
            />
            {errors.password && <p className="text-red-700 text-sm mt-1">{errors.password.message}</p>}

            <PasswordStrengthBar className='mt-1' password={password} />

            <div id="clerk-captcha" />

            <Button type="submit" className="self-center mt-5" loading={currentPendingAction === 'submitWithEmail'}>
              Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
            </Button>
          </form>

          <div className="text-center text-muted-foreground text-sm">or continue with</div>

          <div className="flex gap-2 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="w-[180px]"
              disabled={Boolean(currentPendingAction && currentPendingAction !== 'submitWithGoogle')}
              loading={currentPendingAction === 'submitWithGoogle'}
              onClick={() => signUpWith('oauth_google')}
            >
              <GoogleIcon className='size-6' />
              Google
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-[180px]"
              disabled={Boolean(currentPendingAction && currentPendingAction !== 'submitWithFacebook')}
              loading={currentPendingAction === 'submitWithFacebook'}
              onClick={() => signUpWith('oauth_facebook')}
            >
              <FacebookIcon className='size-6' />
              Facebook
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
            <Button
              type="submit"
              disabled={!verificationCode || !!currentPendingAction}
              className="self-center mt-5"
              loading={currentPendingAction === 'emailVerification'}
            >
              Verify Email
            </Button>
          </form>
        </>
      )}
    </div >
  )
}
