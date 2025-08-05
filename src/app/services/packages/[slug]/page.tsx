"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Star, Clock, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { servicePackages, services } from "@/data/services"
import { CheckoutModal } from "@/components/checkout/CheckoutModal"

interface PackageDetailPageProps {
  params: {
    slug: string
  }
}

export default function PackageDetailPage({ params }: PackageDetailPageProps) {
  const [showCheckout, setShowCheckout] = useState(false)
  const pkg = servicePackages.find(p => p.slug === params.slug)

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
          <Button asChild>
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    )
  }

  const packageServices = services.filter(service => pkg.services.includes(service.id))

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
              {pkg.isPopular && (
                <Badge className="mb-4 bg-green-500 text-white">
                  Best Value
                </Badge>
              )}
              
              <h1 className="text-4xl font-bold tracking-tighter mb-4">
                {pkg.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {pkg.description}
              </p>

              <div className="bg-card border rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">This package includes:</h3>
                <div className="space-y-4">
                  {packageServices.map((service) => (
                    <div key={service.id} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                      </div>
                    </div>
                  ))}
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
                    <span className="text-4xl font-bold">${pkg.packagePrice}</span>
                    <span className="text-lg text-muted-foreground line-through">${pkg.originalPrice}</span>
                  </div>
                  <div className="text-green-600 font-medium">
                    Save ${pkg.savings}! ({Math.round((pkg.savings / pkg.originalPrice) * 100)}% off)
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
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
                    Get This Package
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

      {/* Package Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Everything Included</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Package Features</h3>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Individual Services</h3>
                <div className="space-y-4">
                  {packageServices.map((service) => (
                    <div key={service.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{service.title}</h4>
                        <span className="text-sm text-muted-foreground">${service.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{service.shortDescription}</p>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/services/${service.slug}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Why Choose a Package?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">${pkg.savings}</div>
                  <div className="font-semibold mb-1">Total Savings</div>
                  <p className="text-sm text-muted-foreground">More value for your investment</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">+30%</div>
                  <div className="font-semibold mb-1">Faster Results</div>
                  <p className="text-sm text-muted-foreground">Integrated approach for quicker wins</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">1:1</div>
                  <div className="font-semibold mb-1">Priority Support</div>
                  <p className="text-sm text-muted-foreground">Direct access and faster delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Join 50+ businesses that have transformed their growth with our expert services.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setShowCheckout(true)}
            >
              Get This Package Now
            </Button>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        service={{
          ...packageServices[0], // Use first service as template
          id: pkg.id,
          title: pkg.title,
          price: pkg.packagePrice,
          description: pkg.description,
          shortDescription: pkg.description
        }}
      />
    </div>
  )
}
