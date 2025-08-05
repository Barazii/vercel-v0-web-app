"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data - replace with actual API calls
const caseStudies = [
  {
    id: "1",
    title: "E-commerce Platform Redesign",
    client: "TechStart Inc.",
    industry: "Technology",
    description: "Complete overhaul of user experience leading to significant conversion improvements.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    results: [
      { metric: "Conversion Rate", value: "+127%", description: "Overall conversion improvement" },
      { metric: "Revenue", value: "+$2.4M", description: "Annual revenue increase" },
      { metric: "User Engagement", value: "+89%", description: "Time spent on site" }
    ],
    technologies: ["Next.js", "Stripe", "Analytics", "A/B Testing"],
    featured: true
  },
  {
    id: "2",
    title: "Content Strategy & Brand Development",
    client: "Sustainable Fashion Co.",
    industry: "Fashion",
    description: "Multi-platform content strategy focusing on sustainability and brand storytelling.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    results: [
      { metric: "Organic Traffic", value: "+156%", description: "Monthly organic visitors" },
      { metric: "Social Engagement", value: "+234%", description: "Cross-platform engagement" },
      { metric: "Brand Awareness", value: "+78%", description: "Unaided brand recall" }
    ],
    technologies: ["Content Marketing", "SEO", "Social Media", "Brand Strategy"],
    featured: false
  },
  {
    id: "3",
    title: "Mobile App Launch Strategy",
    client: "HealthTech Solutions",
    industry: "Healthcare",
    description: "Strategic content and marketing campaign for a new health monitoring app.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    results: [
      { metric: "App Downloads", value: "100K+", description: "First month downloads" },
      { metric: "User Retention", value: "85%", description: "30-day retention rate" },
      { metric: "Media Coverage", value: "50+", description: "Press mentions" }
    ],
    technologies: ["App Store Optimization", "PR", "Content Marketing", "Influencer Outreach"],
    featured: true
  }
]

export function CaseStudies() {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
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
              Case Studies
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Real results from real partnerships. See how I've helped businesses grow through strategic content and e-commerce solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {study.industry}
                    </span>
                    {study.featured && (
                      <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-1">
                    Client: {study.client}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-2 mb-4">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{result.metric}:</span>
                        <span className="font-semibold text-green-600">{result.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center"
                    >
                      View Details
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-card border rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Create Your Success Story?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help transform your business with proven strategies and compelling content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/case-studies">
                    Browse All Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
