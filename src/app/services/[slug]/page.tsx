"use client"

import { useState } from "react"
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
  params: {
    slug: string
  }
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const [showCheckout, setShowCheckout] = useState(false)
  const service = services.find(s => s.slug === params.slug)

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge 
                variant="secondary" 
                className="mb-4"
                style={{ backgroundColor: `var(--${service.category.color}-100)`, color: `var(--${service.category.color}-700)` }}
              >
                {service.category.name}
              </Badge>
              {service.isPopular && (
                <Badge className="mb-4 ml-2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <h1 className="text-4xl font-bold tracking-tighter mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {service.description}
              </p>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 text-sm text-muted-foreground">4.9/5 (12 reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  50+ clients served
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-8"
            >
              <div className="bg-card border rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold">${service.price}</span>
                    <span className="text-lg text-muted-foreground">USD</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      Money-back guarantee
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => setShowCheckout(true)}
                  >
                    Get Started Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link href="/contact">
                      Ask Questions First
                    </Link>
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Shield className="w-4 h-4" />
                    Secure payment with Stripe
                  </div>
                  <p>100% satisfaction guaranteed or your money back</p>
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
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="testimonials">Reviews</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                <div>
                  <h3 className="text-2xl font-bold mb-4">You'll Receive</h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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

            <TabsContent value="testimonials" className="mt-8">
              <h3 className="text-2xl font-bold mb-6">Client Reviews</h3>
              <div className="space-y-6">
                {service.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <span className="text-sm text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{testimonial.content}</p>
                      </div>
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
                  },
                  {
                    question: "What if I'm not satisfied?",
                    answer: "I offer a 100% satisfaction guarantee. If you're not completely happy with the work, I'll refund your payment within 30 days."
                  },
                  {
                    question: "Can I speak with you before purchasing?",
                    answer: "Absolutely! I offer free 15-minute consultation calls to discuss your needs and ensure this service is the right fit."
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

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-2xl font-bold text-center mb-8">You Might Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services
              .filter(s => s.id !== service.id && s.category.id === service.category.id)
              .slice(0, 3)
              .map((relatedService) => (
                <div key={relatedService.id} className="bg-card border rounded-lg p-6">
                  <h4 className="font-semibold mb-2">{relatedService.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{relatedService.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">${relatedService.price}</span>
                    <Button size="sm" asChild>
                      <Link href={`/services/${relatedService.slug}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
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
