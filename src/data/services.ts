/**
 * SERVICES DATA
 * 
 * This file contains all the actual service data for the website.
 * When you want to add, edit, or remove services, this is the main file to modify.
 * 
 * Structure:
 * 1. Service Categories - Groups services into logical categories
 * 2. Individual Services - The actual services offered
 * 
 * How to add a new service:
 * 1. Add it to the 'services' array below
 * 2. Make sure it follows the Service interface from /types/services.ts
 * 3. Choose an existing category or create a new one
 * 4. Add an image to /public/services/ folder
 */

import { Service, ServiceCategory } from '@/types/services'

// Service categories - used to organize services into groups
export const serviceCategories: ServiceCategory[] = [
  {
    id: '1',
    name: 'Content Strategy',                    // Category name shown to users
    slug: 'content-strategy',                   // URL-friendly version
    description: 'Strategic content planning and editorial guidance',  // Brief description
    color: 'blue'                               // Color theme for this category
  },
  {
    id: '2',
    name: 'E-commerce Consulting',
    slug: 'ecommerce-consulting',
    description: 'Growth strategies and optimization for online stores',
    color: 'green'
  }
]

// Individual services - these are the actual services offered on the website
export const services: Service[] = [
  // SERVICE 1: E-commerce Growth Audit
  {
    id: '1',                                    // Unique identifier
    title: 'E-commerce Growth Audit',          // Service name shown to customers
    slug: 'ecommerce-growth-audit',            // Used in URLs: /services/ecommerce-growth-audit
    
    // Service descriptions
    description: 'Comprehensive analysis of your online store with actionable recommendations to increase revenue and optimize conversions.',
    shortDescription: 'Deep-dive audit of your e-commerce store with growth recommendations',
    
    // Pricing
    price: 497,                                // Price in dollars (no decimals needed for whole numbers)
    currency: 'USD',
    
    // What's included in this service - shown in the "Overview" tab
    features: [
      'Complete site analysis (UX/UI, performance, SEO)',
      'Conversion funnel optimization report',
      'Competitor benchmarking analysis',
      'Revenue optimization roadmap',
      'Personalized 60-minute strategy call',
      'Written report with prioritized action items'
    ],
    
    // Step-by-step process - shown in the "Process" tab
    process: [
      {
        step: 1,
        title: 'Discovery & Access',
        description: 'Share your store details and provide necessary access for analysis',
        duration: '1 day'
      },
      {
        step: 2,
        title: 'Deep Analysis',
        description: 'Comprehensive audit of your store, competitors, and market position',
        duration: '3-4 days'
      },
      {
        step: 3,
        title: 'Strategy Session',
        description: 'Live 60-minute call to discuss findings and recommendations',
        duration: '1 hour'
      },
      {
        step: 4,
        title: 'Final Report',
        description: 'Detailed written report with actionable next steps',
        duration: '1-2 days'
      }
    ],
    
    // Service metadata
    category: serviceCategories[1],             // References the "E-commerce Consulting" category
    isPopular: true,                           // Shows "Popular" badge on service cards
    isAvailable: true,                         // Whether customers can currently purchase this
    image: '/services/ecommerce-audit.jpg',   // Image shown on service pages
    createdAt: '2024-01-01T00:00:00Z',        // When this service was created
    updatedAt: '2024-01-15T00:00:00Z'         // When it was last updated
  },
  // SERVICE 2: Content Strategy Blueprint
  {
    id: '2',
    title: 'Content Strategy Blueprint',
    slug: 'content-strategy-blueprint',
    
    // Service descriptions
    description: 'Custom content strategy designed to build your authority, engage your audience, and drive meaningful business results.',
    shortDescription: 'Tailored content strategy to establish authority and drive engagement',
    
    // Pricing
    price: 297,
    currency: 'USD',
    
    // What's included in this service
    features: [
      'Comprehensive audience analysis',
      'Content pillar development',
      'Editorial calendar (3 months)',
      'Content format recommendations',
      'Distribution strategy',
      'Performance tracking setup'
    ],
    
    // Step-by-step process
    process: [
      {
        step: 1,
        title: 'Brand Discovery',
        description: 'Understanding your brand voice, goals, and target audience',
        duration: '1 day'
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Creating comprehensive content pillars and messaging framework',
        duration: '2-3 days'
      },
      {
        step: 3,
        title: 'Calendar Creation',
        description: 'Building detailed editorial calendar with content ideas',
        duration: '1-2 days'
      }
    ],
    
    // Service metadata
    category: serviceCategories[0],             // References the "Content Strategy" category
    isPopular: false,                          // Not marked as popular
    isAvailable: true,                         // Available for purchase
    image: '/services/content-strategy.jpg',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  }
]

/**
 * ADDING NEW SERVICES
 * 
 * To add a new service:
 * 1. Copy one of the service objects above
 * 2. Change the id to the next number (e.g., '3')
 * 3. Update all the details (title, slug, description, etc.)
 * 4. Make sure the slug is unique and URL-friendly
 * 5. Add an image to /public/services/ folder
 * 6. Choose an appropriate category or create a new one
 * 
 * The service will automatically appear on the services page
 * and be available for purchase through the checkout system.
 */
