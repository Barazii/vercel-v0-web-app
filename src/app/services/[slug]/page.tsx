/**
 * SERVICE DETAIL PAGE
 * 
 * This is a dynamic page that shows the details for a specific service.
 * The [slug] in the folder name means this page handles URLs like:
 * - /services/ecommerce-growth-audit
 * - /services/content-strategy-blueprint
 * 
 * How it works:
 * 1. Takes the slug from the URL (e.g., "ecommerce-growth-audit")
 * 2. Finds the matching service in the services data
 * 3. Displays the service details using modular components
 * 4. Handles checkout modal when "Buy Now" is clicked
 */
"use client"

// Import React hooks and Next.js components
import { useState, use } from "react"    // useState for modal, use for async params
import Link from "next/link"             // For navigation links
import { ArrowLeft } from "lucide-react" // Back arrow icon
import { Button } from "@/components/ui/button"

// Import data and custom components
import { services } from "@/data/services"                           // Service data
import { CheckoutModal } from "@/components/checkout/CheckoutModal" // Payment modal
import { ServicePricingCard } from "@/components/services/ServicePricingCard"     // Pricing display
import { ServiceContentTabs } from "@/components/services/ServiceContentTabs"     // Tabbed content

// TypeScript interface - defines what props this page component expects
interface ServiceDetailPageProps {
  params: Promise<{
    slug: string                         // The URL slug (e.g., "ecommerce-growth-audit")
  }>
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // State for controlling the checkout modal visibility
  const [showCheckout, setShowCheckout] = useState(false)
  
  // Extract the slug from the URL parameters
  const { slug } = use(params)
  
  // Find the service that matches this slug
  const service = services.find(s => s.slug === slug)

  // If no service found, show error page
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
            <ServicePricingCard 
              service={service} 
              onBookNow={() => setShowCheckout(true)} 
            />
          </div>
        </div>
      </section>

      <ServiceContentTabs service={service} />

      <CheckoutModal 
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        service={service}
      />
    </div>
  )
}
