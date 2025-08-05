import { useState, useCallback } from "react"

export interface Toast {
  id: string
  title: string
  description?: string
  variant?: "default" | "destructive"
}

let toastCount = 0
let globalToast: ((toast: Omit<Toast, "id">) => string) | null = null

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback(({ title, description, variant = "default" }: Omit<Toast, "id">) => {
    const id = (++toastCount).toString()
    const newToast: Toast = { id, title, description, variant }
    
    setToasts((prev) => [...prev, newToast])
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)
    
    return id
  }, [])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  // Set global toast reference
  if (!globalToast) {
    globalToast = toast
  }

  return {
    toast,
    dismiss,
    toasts,
  }
}

// Export a function that can be used outside of components
export const toast = ({ title, description, variant = "default" }: Omit<Toast, "id">) => {
  if (globalToast) {
    return globalToast({ title, description, variant })
  }
  // Fallback to console.log for server-side or when no toast provider is available
  console.log(`Toast: ${title}${description ? ` - ${description}` : ''}`)
  return ''
}
