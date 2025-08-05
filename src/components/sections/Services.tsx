"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check, Star, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "content-strategy",
    name: "Content Strategy",
    price: "$2,500",
    duration: "4-6 weeks",
    description: "Comprehensive content strategy and implementation for your brand.",
    features: [
      "Content audit and competitive analysis",
      "Editorial calendar creation",
      "Brand voice and tone guidelines",
      "SEO optimization strategy",
      "Multi-platform content planning",
      "Performance tracking setup",
      "Team training and handoff"
    ],
    popular: false,
    color: "blue"
  },
  {
    id: "ecommerce-consultation",
    name: "E-commerce Consultation",
    price: "$5,000",
    duration: "8-12 weeks",
    description: "End-to-end e-commerce strategy and optimization for growth.",
    features: [
      "Conversion rate optimization",
      "User experience audit",
      "Sales funnel optimization",
      "Payment gateway setup",
      "Analytics implementation",
      "A/B testing framework",
      "Growth strategy roadmap",
      "Ongoing support (3 months)"
    ],
    popular: true,
    color: "green"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "The e-commerce consultation transformed our business. Revenue increased by 150% in just 6 months.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GreenTech",
    content: "Outstanding content strategy that perfectly captured our brand voice and drove real engagement.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
]

export function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Professional Services
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Transform your business with expert content strategy, e-commerce optimization, and professional journalism services.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300 ${
                  service.popular ? 'border-primary shadow-md' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{service.price}</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                  <p className="text-muted-foreground mt-3">{service.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full" variant={service.popular ? "default" : "outline"}>
                  <Link href={`/services/${service.id}`}>
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl font-semibold text-center mb-12">What My Customers Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card border rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Custom Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Need Something Custom?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every business is unique. Let's discuss your specific needs and create a tailored solution that drives real results.
              </p>
              <Button asChild size="lg">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
