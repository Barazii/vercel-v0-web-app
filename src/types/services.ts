// Service types for the services system
export interface Service {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  price: number
  currency: string
  duration: string
  features: string[]
  deliverables: string[]
  process: ProcessStep[]
  testimonials: Testimonial[]
  category: ServiceCategory
  isPopular: boolean
  isAvailable: boolean
  stripePriceId?: string
  image: string
  gallery: string[]
  createdAt: string
  updatedAt: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  duration: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar: string
  serviceId: string
}

export interface ServiceCategory {
  id: string
  name: string
  slug: string
  description: string
  color: string
}

// Checkout and payment types
export interface CheckoutSession {
  id: string
  serviceId: string
  customerEmail: string
  customerName: string
  status: 'pending' | 'completed' | 'cancelled'
  amount: number
  currency: string
  stripeSessionId?: string
  paymentMethod: 'stripe' | 'metamask'
  createdAt: string
}

export interface ServiceBooking {
  id: string
  serviceId: string
  customerEmail: string
  customerName: string
  customerPhone?: string
  projectDetails: string
  preferredStartDate: string
  budget: number
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
  createdAt: string
}

// Package/bundle types
export interface ServicePackage {
  id: string
  title: string
  slug: string
  description: string
  services: string[] // Service IDs
  originalPrice: number
  packagePrice: number
  savings: number
  duration: string
  isPopular: boolean
  features: string[]
  stripePriceId?: string
}

// Client portal types
export interface ClientProject {
  id: string
  serviceId: string
  clientEmail: string
  title: string
  status: 'planning' | 'in_progress' | 'review' | 'completed'
  progress: number
  startDate: string
  expectedDelivery: string
  updates: ProjectUpdate[]
  deliverables: ProjectDeliverable[]
}

export interface ProjectUpdate {
  id: string
  title: string
  description: string
  date: string
  attachments: string[]
}

export interface ProjectDeliverable {
  id: string
  title: string
  description: string
  fileUrl?: string
  isCompleted: boolean
  dueDate: string
}
