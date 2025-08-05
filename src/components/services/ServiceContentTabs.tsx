/**
 * ServiceContentTabs Component
 * 
 * A reusable tabbed interface for displaying service details including:
 * - Overview: List of features included in the service
 * - Process: Step-by-step workflow of how the service is delivered
 * - FAQ: Frequently asked questions about the service
 * 
 * This component is designed to be modular and can be easily reused
 * across different service detail pages.
 */
"use client"

// Import icons and UI components
import { CheckCircle } from "lucide-react" // Checkmark icon for feature lists
import { Badge } from "@/components/ui/badge" // Small status/info badges
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" // Tab navigation components
import { Service } from "@/types/services" // TypeScript type definition for services

// Define the props this component expects to receive
interface ServiceContentTabsProps {
  service: Service // The service object containing all service details
}

export function ServiceContentTabs({ service }: ServiceContentTabsProps) {
  // Static FAQ data - in the future, this could be moved to the service data
  // or fetched from a CMS for easier management
  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "Most clients start seeing improvements within 2-4 weeks of implementing the recommendations. However, full results typically become visible within 6-8 weeks."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes! One round of revisions is included with every service. Additional revisions can be purchased if needed."
    }
  ]

  return (
    // Main section wrapper with padding
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Tabs component - defaultValue sets which tab opens first */}
        <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
          {/* Tab navigation buttons - grid layout makes them equal width */}
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB - Shows what's included in the service */}
          <TabsContent value="overview" className="mt-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">What&apos;s Included</h3>
              <ul className="space-y-3">
                {/* Loop through service features and display each with a checkmark */}
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Green checkmark icon */}
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* PROCESS TAB - Shows step-by-step workflow */}
          <TabsContent value="process" className="mt-8">
            <h3 className="text-2xl font-bold mb-6">How It Works</h3>
            <div className="space-y-6">
              {/* Loop through process steps from service data */}
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-4">
                  {/* Numbered circle for step number */}
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold">{step.title}</h4>
                      {/* Duration badge shows how long each step takes */}
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* FAQ TAB - Shows frequently asked questions */}
          <TabsContent value="faq" className="mt-8">
            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {/* Loop through FAQ array defined above */}
              {faqs.map((faq, index) => (
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
  )
}
