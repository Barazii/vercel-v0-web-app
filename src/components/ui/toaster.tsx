"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import type { Toast } from "@/hooks/use-toast"

interface ToasterProps {
  className?: string
}

let toasts: Toast[] = []
let toastSubscribers: ((toasts: Toast[]) => void)[] = []

export function addToast(toast: Omit<Toast, "id">) {
  const id = Math.random().toString(36).substring(2, 9)
  const newToast = { ...toast, id }
  toasts = [...toasts, newToast]
  toastSubscribers.forEach(fn => fn(toasts))
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    removeToast(id)
  }, 5000)
  
  return id
}

export function removeToast(id: string) {
  toasts = toasts.filter(toast => toast.id !== id)
  toastSubscribers.forEach(fn => fn(toasts))
}

export function Toaster({ className }: ToasterProps) {
  const [toastList, setToastList] = useState<Toast[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    toastSubscribers.push(setToastList)
    setToastList(toasts)
    
    return () => {
      const index = toastSubscribers.indexOf(setToastList)
      if (index > -1) {
        toastSubscribers.splice(index, 1)
      }
    }
  }, [])

  if (!mounted) return null

  return createPortal(
    <div className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}>
      {toastList.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
            "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
            toast.variant === "destructive"
              ? "destructive border-destructive bg-destructive text-destructive-foreground"
              : "border bg-background text-foreground"
          )}
        >
          <div className="grid gap-1">
            <div className="text-sm font-semibold">{toast.title}</div>
            {toast.description && (
              <div className="text-sm opacity-90">{toast.description}</div>
            )}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>,
    document.body
  )
}
