import { Service, ServiceCategory } from '@/types/services'

// Service categories
export const serviceCategories: ServiceCategory[] = [
  {
    id: '1',
    name: 'Content Strategy',
    slug: 'content-strategy',
    description: 'Strategic content planning and editorial guidance',
    color: 'blue'
  },
  {
    id: '2',
    name: 'E-commerce Consulting',
    slug: 'ecommerce-consulting',
    description: 'Growth strategies and optimization for online stores',
    color: 'green'
  }
]

// Individual services (simplified)
export const services: Service[] = [
  {
    id: '1',
    title: 'E-commerce Growth Audit',
    slug: 'ecommerce-growth-audit',
    description: 'Comprehensive analysis of your online store with actionable recommendations to increase revenue and optimize conversions.',
    shortDescription: 'Deep-dive audit of your e-commerce store with growth recommendations',
    price: 497,
    currency: 'USD',
    features: [
      'Complete site analysis (UX/UI, performance, SEO)',
      'Conversion funnel optimization report',
      'Competitor benchmarking analysis',
      'Revenue optimization roadmap',
      'Personalized 60-minute strategy call',
      'Written report with prioritized action items'
    ],
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
    category: serviceCategories[1],
    isPopular: true,
    isAvailable: true,
    image: '/services/ecommerce-audit.jpg',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    title: 'Content Strategy Blueprint',
    slug: 'content-strategy-blueprint',
    description: 'Custom content strategy designed to build your authority, engage your audience, and drive meaningful business results.',
    shortDescription: 'Tailored content strategy to establish authority and drive engagement',
    price: 297,
    currency: 'USD',
    features: [
      'Comprehensive audience analysis',
      'Content pillar development',
      'Editorial calendar (3 months)',
      'Content format recommendations',
      'Distribution strategy',
      'Performance tracking setup'
    ],
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
    category: serviceCategories[0],
    isPopular: false,
    isAvailable: true,
    image: '/services/content-strategy.jpg',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  }
]
