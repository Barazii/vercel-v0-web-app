"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Journalist &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                E-commerce
              </span>{" "}
              Consultant
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              I help brands tell their stories and grow their digital presence through 
              compelling content, strategic insights, and proven e-commerce solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Brands Helped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">$10M+</div>
              <div className="text-sm text-muted-foreground">Revenue Generated</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Extended Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top section glows */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        
        {/* Extended flowing elements */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse animation-delay-3000"></div>
      </div>
    </section>
  )
}
