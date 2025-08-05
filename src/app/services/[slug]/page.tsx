"use client"

import { useState, use } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Star, Clock, Users, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { services } from "@/data/services"
import { Service } from "@/types/services"
import { CheckoutModal } from "@/components/checkout/CheckoutModal"

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const [showCheckout, setShowCheckout] = useState(false)
  const { slug } = use(params)
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/services">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </Button>

          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <div className="bg-card border rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold">${service.price}</span>
                    <span className="text-lg text-muted-foreground">USD</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => setShowCheckout(true)}
                  >
                    Buy Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Shield className="w-4 h-4" />
                    Secure payment with Stripe
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-8">
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold">{step.title}</h4>
                        <Badge variant="outline">{step.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-8">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    question: "How quickly will I see results?",
                    answer: "Most clients start seeing improvements within 2-4 weeks of implementing the recommendations. However, full results typically become visible within 6-8 weeks."
                  },
                  {
                    question: "Do you offer revisions?",
                    answer: "Yes! One round of revisions is included with every service. Additional revisions can be purchased if needed."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        service={service}
      />
    </div>
  )
}
