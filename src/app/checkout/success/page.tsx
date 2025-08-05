"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, ArrowRight, Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [sessionData, setSessionData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      // Fetch session details
      fetch(`/api/checkout/session/${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setSessionData(data)
          setLoading(false)
        })
        .catch(err => {
          console.error('Error fetching session:', err)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Confirming your payment...</p>
        </div>
      </div>
    )
  }

  if (!sessionId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Invalid Session</h1>
          <Button asChild>
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h1 className="text-4xl font-bold tracking-tighter mb-4">
              Payment Successful! 🎉
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your purchase. Your service has been confirmed and we'll get started right away.
            </p>

            <div className="bg-card border rounded-xl p-8 mb-8 text-left">
              <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Confirmation Email</h3>
                    <p className="text-sm text-muted-foreground">
                      You'll receive a detailed confirmation email within the next few minutes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Project Kickoff</h3>
                    <p className="text-sm text-muted-foreground">
                      I'll reach out within 24 hours to schedule our kickoff call and gather any additional details.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Work Begins</h3>
                    <p className="text-sm text-muted-foreground">
                      I'll start working on your project and keep you updated throughout the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Expected Delivery</h3>
                <p className="text-sm text-muted-foreground">5-7 business days</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">Regular progress updates</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  View Project Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link href="/services">Browse Other Services</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Need immediate assistance?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                If you have any questions or concerns, I'm here to help.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
