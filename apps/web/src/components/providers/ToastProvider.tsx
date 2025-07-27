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

type ToastType = {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

type ToastContextValue = {
  showToast: (toast: ToastType) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within ToastProvider")
  return ctx
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [currentToast, setCurrentToast] = useState<ToastType | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const showToast = useCallback((toast: ToastType) => {
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
          {currentToast?.description && (
            <ToastDescription>{currentToast.description}</ToastDescription>
          )}
          <ToastClose />
        </Toast>
        <ToastViewport />
      </RadixToastProvider>
    </ToastContext.Provider>
  )
}
