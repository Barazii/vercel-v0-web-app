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
  },
  {
    id: '3',
    name: 'Writing Services',
    slug: 'writing-services',
    description: 'Professional writing and editorial services',
    color: 'purple'
  },
  {
    id: '4',
    name: 'Training & Workshops',
    slug: 'training-workshops',
    description: 'Educational sessions and skill development',
    color: 'orange'
  }
]

// Individual services
export const services: Service[] = [
  {
    id: '1',
    title: 'E-commerce Growth Audit',
    slug: 'ecommerce-growth-audit',
    description: 'Comprehensive analysis of your online store with actionable recommendations to increase revenue and optimize conversions.',
    shortDescription: 'Deep-dive audit of your e-commerce store with growth recommendations',
    price: 497,
    currency: 'USD',
    duration: '5-7 business days',
    features: [
      'Complete site analysis (UX/UI, performance, SEO)',
      'Conversion funnel optimization report',
      'Competitor benchmarking analysis',
      'Revenue optimization roadmap',
      'Personalized 60-minute strategy call',
      'Written report with prioritized action items'
    ],
    deliverables: [
      '15-20 page comprehensive audit report',
      'Conversion optimization checklist',
      'Competitor analysis spreadsheet',
      '90-day implementation roadmap',
      'Follow-up strategy session recording'
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
    testimonials: [
      {
        id: '1',
        name: 'Sarah Chen',
        company: 'Boutique Fashion Co.',
        role: 'Founder',
        content: 'The audit identified 12 specific issues that were costing us sales. We implemented the recommendations and saw a 34% increase in conversion rate within 6 weeks.',
        rating: 5,
        avatar: '/testimonials/sarah-chen.jpg',
        serviceId: '1'
      }
    ],
    category: serviceCategories[1],
    isPopular: true,
    isAvailable: true,
    stripePriceId: 'price_ecommerce_audit',
    image: '/services/ecommerce-audit.jpg',
    gallery: [
      '/services/audit-sample-1.jpg',
      '/services/audit-sample-2.jpg',
      '/services/audit-process.jpg'
    ],
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
    duration: '3-5 business days',
    features: [
      'Content audit of existing materials',
      'Audience persona development',
      '90-day content calendar',
      'Content pillar framework',
      'Distribution strategy across platforms',
      'Performance metrics and KPIs'
    ],
    deliverables: [
      'Content strategy document (10-15 pages)',
      '90-day content calendar with topics',
      'Content templates and frameworks',
      'Social media posting schedule',
      'Performance tracking dashboard'
    ],
    process: [
      {
        step: 1,
        title: 'Content Audit',
        description: 'Review existing content and identify gaps and opportunities',
        duration: '1-2 days'
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Create comprehensive content strategy and calendar',
        duration: '2-3 days'
      },
      {
        step: 3,
        title: 'Delivery & Review',
        description: 'Present strategy with implementation guidance',
        duration: '30 minutes'
      }
    ],
    testimonials: [
      {
        id: '2',
        name: 'Marcus Rodriguez',
        company: 'Tech Startup Inc.',
        role: 'Marketing Director',
        content: 'The content strategy completely transformed our approach. Our engagement rates doubled, and we\'ve established ourselves as thought leaders in our industry.',
        rating: 5,
        avatar: '/testimonials/marcus-rodriguez.jpg',
        serviceId: '2'
      }
    ],
    category: serviceCategories[0],
    isPopular: false,
    isAvailable: true,
    stripePriceId: 'price_content_strategy',
    image: '/services/content-strategy.jpg',
    gallery: [
      '/services/content-calendar.jpg',
      '/services/content-framework.jpg'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z'
  },
  {
    id: '3',
    title: 'Premium Article Writing',
    slug: 'premium-article-writing',
    description: 'High-quality, research-driven articles that establish your expertise and drive organic traffic to your business.',
    shortDescription: 'Professional article writing for thought leadership and SEO',
    price: 197,
    currency: 'USD',
    duration: '5-7 business days',
    features: [
      'In-depth research and fact-checking',
      'SEO optimization for target keywords',
      'Engaging, authoritative writing style',
      'Custom graphics and formatting',
      'Social media promotion package',
      'One round of revisions included'
    ],
    deliverables: [
      '1,500-2,500 word premium article',
      'Meta description and SEO title',
      'Custom featured image',
      'Social media post templates',
      'Publication-ready formatting'
    ],
    process: [
      {
        step: 1,
        title: 'Topic & Research',
        description: 'Finalize topic, keywords, and conduct thorough research',
        duration: '1-2 days'
      },
      {
        step: 2,
        title: 'Writing & Optimization',
        description: 'Create engaging, SEO-optimized content',
        duration: '2-3 days'
      },
      {
        step: 3,
        title: 'Review & Delivery',
        description: 'Final review, formatting, and delivery with promotion materials',
        duration: '1-2 days'
      }
    ],
    testimonials: [
      {
        id: '3',
        name: 'Jennifer Walsh',
        company: 'Consulting Firm',
        role: 'Principal Consultant',
        content: 'The article not only ranked on the first page of Google but also generated 15 new client inquiries. The ROI was incredible.',
        rating: 5,
        avatar: '/testimonials/jennifer-walsh.jpg',
        serviceId: '3'
      }
    ],
    category: serviceCategories[2],
    isPopular: false,
    isAvailable: true,
    stripePriceId: 'price_article_writing',
    image: '/services/article-writing.jpg',
    gallery: [
      '/services/article-sample-1.jpg',
      '/services/article-sample-2.jpg'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z'
  },
  {
    id: '4',
    title: 'E-commerce Masterclass',
    slug: 'ecommerce-masterclass',
    description: 'Intensive 2-hour workshop covering advanced e-commerce strategies, conversion optimization, and scaling techniques.',
    shortDescription: 'Live 2-hour workshop on advanced e-commerce growth strategies',
    price: 97,
    currency: 'USD',
    duration: '2 hours live + recordings',
    features: [
      'Live 2-hour interactive workshop',
      'Advanced scaling strategies',
      'Conversion optimization techniques',
      'Q&A session with personalized advice',
      'Workshop recording and slides',
      'Exclusive resource toolkit'
    ],
    deliverables: [
      'Live workshop attendance',
      'High-quality recording access',
      'Workshop slides and materials',
      'Resource toolkit (templates, checklists)',
      'Private community access for 30 days'
    ],
    process: [
      {
        step: 1,
        title: 'Registration',
        description: 'Secure your spot and receive workshop materials',
        duration: 'Immediate'
      },
      {
        step: 2,
        title: 'Live Workshop',
        description: 'Attend live interactive 2-hour session',
        duration: '2 hours'
      },
      {
        step: 3,
        title: 'Follow-up',
        description: 'Access recordings, materials, and community',
        duration: '30 days'
      }
    ],
    testimonials: [
      {
        id: '4',
        name: 'David Park',
        company: 'Online Retailer',
        role: 'Owner',
        content: 'Best $97 I\'ve ever spent. The strategies shared helped me scale from $10k to $50k monthly revenue in just 4 months.',
        rating: 5,
        avatar: '/testimonials/david-park.jpg',
        serviceId: '4'
      }
    ],
    category: serviceCategories[3],
    isPopular: true,
    isAvailable: true,
    stripePriceId: 'price_masterclass',
    image: '/services/masterclass.jpg',
    gallery: [
      '/services/workshop-setup.jpg',
      '/services/workshop-materials.jpg'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  }
]

// Service packages/bundles
export const servicePackages: ServicePackage[] = [
  {
    id: '1',
    title: 'Complete Growth Package',
    slug: 'complete-growth-package',
    description: 'Everything you need to audit, strategize, and scale your e-commerce business with expert guidance.',
    services: ['1', '2'], // E-commerce audit + Content strategy
    originalPrice: 794,
    packagePrice: 697,
    savings: 97,
    duration: '2-3 weeks',
    isPopular: true,
    features: [
      'Complete e-commerce growth audit',
      'Custom content strategy blueprint',
      'Priority support and faster delivery',
      'Extended 90-minute strategy call',
      'Implementation support for 30 days'
    ],
    stripePriceId: 'price_growth_package'
  },
  {
    id: '2',
    title: 'Content Authority Bundle',
    slug: 'content-authority-bundle',
    description: 'Establish your expertise with strategic content planning and premium article creation.',
    services: ['2', '3'], // Content strategy + Article writing
    originalPrice: 494,
    packagePrice: 397,
    savings: 97,
    duration: '1-2 weeks',
    isPopular: false,
    features: [
      'Complete content strategy development',
      'Premium article writing service',
      'SEO optimization across all content',
      'Social media promotion materials',
      'Content performance tracking'
    ],
    stripePriceId: 'price_content_bundle'
  }
]
