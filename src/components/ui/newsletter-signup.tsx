"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  type: z.enum(["journalism", "ecommerce"]),
})

type NewsletterForm = z.infer<typeof newsletterSchema>

interface NewsletterSignupProps {
  className?: string
  type?: "journalism" | "ecommerce"
  variant?: "inline" | "card"
}

export function NewsletterSignup({ 
  className, 
  type = "journalism",
  variant = "inline" 
}: NewsletterSignupProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { 
      type,
      email: "",
    },
  })

  const onSubmit = async (data: NewsletterForm) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubscribed(true)
        reset()
      } else {
        throw new Error("Failed to subscribe")
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <div className={cn("text-center", className)}>
        <p className="text-sm text-green-600 font-medium">
          ✓ Successfully subscribed to {type} updates!
        </p>
      </div>
    )
  }

  if (variant === "card") {
    return (
      <div className={cn("p-6 border rounded-lg bg-card", className)}>
        <h3 className="text-lg font-semibold mb-2">
          Subscribe to {type === "journalism" ? "Journalism" : "E-commerce"} Updates
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get the latest {type === "journalism" ? "articles and insights" : "case studies and tips"} 
          delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("flex gap-2", className)}>
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "..." : "Subscribe"}
      </Button>
    </form>
  )
}
