'use client'

import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils"

type PasswordInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  containerClassName?: string;
}

export function PasswordInput({ containerClassName, className, ...inputProps }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("relative", containerClassName)}>
      <input
        type={showPassword ? 'text' : 'password'}
        {...inputProps}
        className={cn("w-full border p-2 rounded-md")}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        tabIndex={-1}
        title={!showPassword ? "Show password" : "Hide Password"}
      >
        {!showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </button>
    </div>
  )
}
