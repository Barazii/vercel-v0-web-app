/**
 * SERVICES TYPE DEFINITIONS
 * 
 * This file contains all TypeScript type definitions for the services system.
 * These types ensure type safety throughout the application and make it clear
 * what data structure each component expects.
 * 
 * Key Types:
 * - Service: Main service object with all details
 * - ProcessStep: Individual steps in the service delivery process
 * - ServiceCategory: Categories to organize services
 * - CheckoutSession: Payment session tracking
 * - ServiceBooking: Customer booking information
 */

// Service types for the services system

/**
 * Main Service interface
 * 
 * This defines the complete structure of a service object.
 * Every service in the system must have all these properties.
 */
export interface Service {
  id: string                    // Unique identifier for the service
  title: string                 // Service name (e.g., "E-commerce Growth Audit")
  slug: string                  // URL-friendly version of title (e.g., "ecommerce-growth-audit")
  description: string           // Detailed description for service pages
  shortDescription: string      // Brief summary for cards and previews
  price: number                 // Price in the smallest currency unit (e.g., 497 for $497)
  currency: string              // Currency code (e.g., "USD")
  features: string[]            // Array of what's included in the service
  process: ProcessStep[]        // Step-by-step workflow for service delivery
  category: ServiceCategory     // Which category this service belongs to
  isPopular: boolean           // Whether to show "Popular" badge
  isAvailable: boolean         // Whether service is currently available for purchase
  image: string                // Path to service image (e.g., "/services/audit.jpg")
  createdAt: string            // When service was created (ISO date string)
  updatedAt: string            // When service was last modified (ISO date string)
}

/**
 * Process Step interface
 * 
 * Defines individual steps in the service delivery workflow.
 * Used to show clients what to expect during the service.
 */
export interface ProcessStep {
  step: number                 // Step number (1, 2, 3, etc.)
  title: string                // Brief title for the step (e.g., "Discovery & Access")
  description: string          // Detailed explanation of what happens in this step
  duration: string             // How long this step takes (e.g., "2-3 days", "1 hour")
}

/**
 * Service Category interface
 * 
 * Used to organize services into logical groups.
 * Each service belongs to one category.
 */
export interface ServiceCategory {
  id: string                   // Unique identifier for the category
  name: string                 // Display name (e.g., "Content Strategy")
  slug: string                 // URL-friendly version (e.g., "content-strategy")
  description: string          // Brief description of what this category covers
  color: string                // Color theme for visual distinction (e.g., "blue", "green")
}

// Checkout and payment types

/**
 * Checkout Session interface
 * 
 * Tracks payment sessions when customers purchase services.
 * This helps manage the payment flow and track transaction status.
 */
export interface CheckoutSession {
  id: string                   // Unique session identifier
  serviceId: string            // Which service is being purchased
  customerEmail: string        // Customer's email address
  customerName: string         // Customer's full name
  status: 'pending' | 'completed' | 'cancelled'  // Current payment status
  amount: number               // Total amount in smallest currency unit
  currency: string             // Currency for the transaction
  paymentMethod: 'stripe' | 'metamask'           // How they're paying
  createdAt: string            // When checkout session was created
}

/**
 * Service Booking interface
 * 
 * Stores customer booking information after successful payment.
 * This is used to manage the service delivery process.
 */
export interface ServiceBooking {
  id: string                   // Unique booking identifier
  serviceId: string            // Which service was booked
  customerEmail: string        // Customer's email for communication
  customerName: string         // Customer's full name
  customerPhone?: string       // Optional phone number (? means optional)
  projectDetails: string       // Customer's specific requirements/details
  budget: number               // Total amount paid
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'  // Service delivery status
  createdAt: string            // When booking was created
}
