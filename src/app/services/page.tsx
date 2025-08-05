"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { services, serviceCategories, servicePackages } from "@/data/services"

export default function ServicesPage() {
  const featuredServices = services.filter(service => service.isPopular)
  const regularServices = services.filter(service => !service.isPopular)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-purple-50/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              Professional Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Expert Services to <span className="text-primary">Grow Your Business</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
              From e-commerce optimization to content strategy, get personalized expertise 
              that delivers measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#services">
                  Browse Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#packages">
                  View Packages
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Most Popular Services
            </h2>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-lg dark:text-gray-400">
              Proven services that deliver exceptional results for businesses like yours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {service.isPopular && (
                  <div className="absolute -top-3 left-6 z-10">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="bg-card border-2 border-primary/20 rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <Badge 
                        variant="secondary" 
                        className="mb-3"
                        style={{ backgroundColor: `var(--${service.category.color}-100)`, color: `var(--${service.category.color}-700)` }}
                      >
                        {service.category.name}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold">${service.price}</span>
                      <span className="text-muted-foreground">USD</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        4.9/5
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-muted-foreground">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full">
                      <Link href={`/services/${service.slug}`}>
                        View Details & Book Now
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/services/${service.slug}#testimonials`}>
                        Read Client Reviews
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">All Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border rounded-xl p-6 hover:shadow-md transition-all duration-300"
                >
                  <Badge 
                    variant="secondary" 
                    className="mb-3"
                    style={{ backgroundColor: `var(--${service.category.color}-100)`, color: `var(--${service.category.color}-700)` }}
                  >
                    {service.category.name}
                  </Badge>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{service.shortDescription}</p>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold">${service.price}</span>
                    <span className="text-muted-foreground text-sm">USD</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      4.9/5
                    </div>
                  </div>

                  <Button asChild className="w-full" size="sm">
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Service Packages
            </h2>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-lg dark:text-gray-400">
              Save money with bundled services designed to maximize your results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-6 z-10">
                    <Badge className="bg-green-500 text-white">
                      Best Value
                    </Badge>
                  </div>
                )}
                <div className="bg-card border rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold">${pkg.packagePrice}</span>
                      <span className="text-lg text-muted-foreground line-through">${pkg.originalPrice}</span>
                    </div>
                    <div className="text-green-600 font-medium text-sm">
                      Save ${pkg.savings}! ({Math.round((pkg.savings / pkg.originalPrice) * 100)}% off)
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Package includes:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Clock className="w-4 h-4" />
                    Delivery: {pkg.duration}
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/services/packages/${pkg.slug}`}>
                      Get This Package
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Why Work With Me?
            </h2>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-lg dark:text-gray-400">
              Over 50+ successful projects and proven track record of delivering results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "50+ Happy Clients",
                description: "Trusted by startups and established businesses across industries"
              },
              {
                icon: <Star className="w-8 h-8 text-primary" />,
                title: "4.9/5 Average Rating",
                description: "Consistently high-quality work that exceeds expectations"
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-primary" />,
                title: "100% Satisfaction",
                description: "Money-back guarantee if you're not completely satisfied"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-lg mb-8">
              Let's discuss your goals and find the perfect service to help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Get Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
