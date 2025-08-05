// Content types for the CMS
export interface Article {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: any[] // Portable text
  coverImage: SanityImage
  publishedAt: string
  author: Author
  category: Category
  tags: Tag[]
  featured?: boolean
}

export interface Video {
  _id: string
  title: string
  slug: string
  description: string
  videoUrl: string
  thumbnail: SanityImage
  duration: number
  publishedAt: string
  category: Category
  tags: Tag[]
  platform: 'youtube' | 'vimeo' | 'custom'
}

export interface Podcast {
  _id: string
  title: string
  slug: string
  description: string
  audioUrl: string
  coverImage: SanityImage
  duration: number
  publishedAt: string
  episode?: number
  season?: number
  transcript?: string
}

export interface CaseStudy {
  _id: string
  title: string
  slug: string
  description: string
  coverImage: SanityImage
  images: SanityImage[]
  client: string
  industry: string
  services: string[]
  results: {
    metric: string
    value: string
    description?: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
  }
  technologies: string[]
  publishedAt: string
  featured?: boolean
}

export interface Service {
  _id: string
  title: string
  slug: string
  description: string
  price: number
  currency: string
  duration: string
  features: string[]
  category: string
  deliverables: string[]
  addOns?: {
    title: string
    price: number
    description: string
  }[]
  active: boolean
}

// Supporting types
export interface Author {
  _id: string
  name: string
  bio: string
  image: SanityImage
  socialLinks: {
    twitter?: string
    linkedin?: string
    instagram?: string
    github?: string
  }
}

export interface Category {
  _id: string
  title: string
  slug: string
  description?: string
  color?: string
}

export interface Tag {
  _id: string
  title: string
  slug: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

// Email subscription types
export interface EmailSubscription {
  email: string
  firstName?: string
  lastName?: string
  type: 'journalism' | 'ecommerce'
  preferences?: {
    frequency: 'daily' | 'weekly' | 'monthly'
    topics: string[]
  }
}

// Contact form types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  type: 'general' | 'journalism' | 'business'
  budget?: string
  timeline?: string
}

// Stripe types
export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: string
  clientSecret: string
}

export interface CheckoutSession {
  id: string
  url: string
  status: string
}
