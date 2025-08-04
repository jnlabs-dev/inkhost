'use client'

import { Button } from '@/components/ui/base/Button'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'

import { cn } from "@/lib/utils"

type SSOButtonsGroupProps = {
  className?: string;
  googleDisabled?: boolean;
  googlePending?: boolean;
  facebookDisabled?: boolean;
  facebookPending?: boolean;
  onGoogleClicked(): void;
  onFacebookClicked(): void;
}

export function SSOButtonsGroup({
  className,
  googleDisabled,
  googlePending,
  facebookDisabled,
  facebookPending,
  onGoogleClicked,
  onFacebookClicked
}: SSOButtonsGroupProps) {
  return (
    <div className={cn("flex gap-2 justify-center", className)}>
      <Button
        size="lg"
        variant="outline"
        className="w-[180px]"
        disabled={googleDisabled}
        loading={googlePending}
        onClick={onGoogleClicked}
      >
        <GoogleIcon className='size-6' />
        Google
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-[180px]"
        disabled={facebookDisabled}
        loading={facebookPending}
        onClick={onFacebookClicked}
      >
        <FacebookIcon className='size-6' />
        Facebook
      </Button>
    </div>
  )
}
