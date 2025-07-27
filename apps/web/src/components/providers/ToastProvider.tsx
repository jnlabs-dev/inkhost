'use client'

import {
  Toast,
  ToastDescription,
  ToastProvider as RadixToastProvider,
  ToastTitle,
  ToastViewport,
  ToastClose,
} from "@/components/ui/base/Toast"
import { createContext, useCallback, useContext, useRef, useState } from "react"

type ToastParamsType = {
  title: string
  description?: string
  variant?: "default" | "error" | "success"
}

type ToastContextValue = {
  showToast: (toast: ToastParamsType) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within ToastProvider")
  return ctx
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [currentToast, setCurrentToast] = useState<ToastParamsType | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const showToast = useCallback((toast: ToastParamsType) => {
    setCurrentToast(toast)
    setOpen(true)

    if (timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      setOpen(false)
      timerRef.current = null
    }, 5000)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      <RadixToastProvider>
        {children}
        <Toast open={open} onOpenChange={setOpen} variant={currentToast?.variant}>
          <ToastTitle>{currentToast?.title}</ToastTitle>
          {currentToast?.description ? (
            <ToastDescription>{currentToast.description}</ToastDescription>
          ) : null}
          <ToastClose />
        </Toast>
        <ToastViewport />
      </RadixToastProvider>
    </ToastContext.Provider>
  )
}
