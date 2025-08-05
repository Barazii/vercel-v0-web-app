/**
 * ServicePricingCard Component
 * 
 * A reusable pricing display card that shows:
 * - Service price in large, prominent text
 * - "Buy Now" button that triggers the checkout modal
 * - Security indicator for payment processing
 * 
 * Features smooth animation on mount using Framer Motion.
 * This component is designed to be the focal point of service pages.
 */
"use client"

// Import animation library and type definitions
import { motion } from "framer-motion" // For smooth animations
import { Service } from "@/types/services" // TypeScript type for service data

// Define what props this component expects
interface ServicePricingCardProps {
  service: Service // The service object containing price and other details
  onBookNow: () => void // Function to call when "Buy Now" button is clicked
}

export function ServicePricingCard({ service, onBookNow }: ServicePricingCardProps) {
  return (
    {/* Motion wrapper provides smooth fade-in animation from bottom */}
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      {/* Main card container with background and border */}
      <div className="bg-card border rounded-xl p-8">
        
        {/* Price display section - centered and prominent */}
        <div className="text-center mb-6">
          <div className="flex items-baseline justify-center gap-2 mb-2">
            {/* Large price text */}
            <span className="text-4xl font-bold">${service.price}</span>
            {/* Currency indicator */}
            <span className="text-lg text-muted-foreground">USD</span>
          </div>
        </div>

        {/* Button section */}
        <div className="space-y-4 mb-6">
          {/* Main call-to-action button */}
          <button 
            onClick={onBookNow} 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md font-medium flex items-center justify-center gap-2"
          >
            Buy Now
            {/* Arrow icon to indicate action */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Security indicator - builds trust with users */}
        <div className="text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-1 mb-2">
            {/* Shield icon for security */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Secure payment with Stripe
          </div>
        </div>
      </div>
    </motion.div>
  )
}
