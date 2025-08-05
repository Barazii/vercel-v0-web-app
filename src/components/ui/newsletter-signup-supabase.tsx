"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNewsletter } from "@/hooks/useSupabase"
import { toast } from "@/hooks/use-toast"

interface NewsletterSignupProps {
  type: "journalism" | "ecommerce"
  variant?: "default" | "card"
  className?: string
  placeholder?: string
}

export function NewsletterSignup({ 
  type, 
  variant = "default", 
  className = "",
  placeholder = "Enter your email" 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const { subscribe, loading, error, success, reset } = useNewsletter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      })
      return
    }

    try {
      await subscribe(email, type, "website")
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter"
      })
      setEmail("")
      reset()
    } catch (err) {
      toast({
        title: "Subscription failed",
        description: error || "Something went wrong. Please try again.",
        variant: "destructive"
      })
    }
  }

  if (variant === "card") {
    return (
      <div className={`space-y-4 ${className}`}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="w-full"
          />
          <Button 
            type="submit" 
            disabled={loading || !email}
            className="w-full"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        {success && (
          <p className="text-sm text-green-600">Successfully subscribed!</p>
        )}
      </div>
    )
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="flex-1"
        />
        <Button 
          type="submit" 
          disabled={loading || !email}
        >
          {loading ? "..." : "Subscribe"}
        </Button>
      </form>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {success && (
        <p className="text-sm text-green-600">Successfully subscribed!</p>
      )}
    </div>
  )
}
