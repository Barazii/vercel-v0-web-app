# Project Structure Documentation

## Overview
This is a clean, modular Next.js website for a journalist/e-commerce consultant with simplified structure focusing on core functionality.

## PROJECT STRUCTURE & ARCHITECTURE

## 🎯 Overview
This is a modern Next.js 15 website built with TypeScript and Tailwind CSS. The codebase follows a **modular architecture** that makes it easy to add new features, modify existing content, and maintain the website long-term.

## 🧱 Key Architectural Principles

### 1. **Separation of Concerns**
- **Data** (what content to show) is separate from **Components** (how to display it)
- **Types** ensure everything works together correctly
- **Styling** is handled consistently with Tailwind CSS

### 2. **Modular Components**
- Small, reusable pieces that can be combined in different ways
- Each component has a single, clear purpose
- Easy to test, modify, and reuse across the site

### 3. **Type Safety**
- TypeScript prevents bugs by checking data types
- Clear interfaces define what data each component expects
- IntelliSense provides helpful autocomplete and error checking

## 📁 Directory Structure

```
src/
├── app/                    # Next.js 15 App Router pages
│   ├── services/          # Services-related pages
│   │   ├── page.tsx       # Main services listing (/services)
│   │   └── [slug]/        # Dynamic service detail pages
│   │       └── page.tsx   # Individual service pages (/services/audit)
│   ├── articles/          # Blog/articles section
│   ├── checkout/          # Payment and checkout flows
│   └── layout.tsx         # Root layout for entire site
│
├── components/            # Reusable UI components
│   ├── services/         # Service-specific components
│   │   ├── ServicePricingCard.tsx    # Pricing display component
│   │   └── ServiceContentTabs.tsx    # Tabbed content component
│   ├── checkout/         # Payment-related components
│   ├── sections/         # Page section components
│   └── ui/              # Basic UI building blocks
│       ├── button.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       └── tabs.tsx
│
├── data/                 # Static data and content
│   └── services.ts       # All service information
│
├── types/                # TypeScript type definitions
│   └── services.ts       # Types for services system
│
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions
```

## 🔧 How to Make Changes

### Adding a New Service
1. **Add service data** in `/src/data/services.ts`
2. **Add service image** to `/public/services/`
3. **The service automatically appears** on the website!

### Modifying Existing Services
1. **Edit the service object** in `/src/data/services.ts`
2. **Changes appear immediately** - no need to touch component files

### Adding New Page Sections
1. **Create new component** in `/src/components/sections/`
2. **Import and use** in the appropriate page file
3. **Follow the existing pattern** of modular, reusable components

### Styling Changes
1. **Use Tailwind classes** for consistent styling
2. **Modify global styles** in `/src/styles/globals.css` if needed
3. **Components inherit** the overall design system automatically

## 🎨 Component Architecture

### ServicePricingCard.tsx
- **Purpose**: Displays service price and "Buy Now" button
- **Props**: Takes a service object and callback function
- **Reusable**: Can be used on any page that needs pricing display

### ServiceContentTabs.tsx  
- **Purpose**: Shows service details in organized tabs (Overview, Process, FAQ)
- **Props**: Takes a service object with features and process steps
- **Reusable**: Works with any service that has the correct data structure

### Service Detail Pages
- **Dynamic routing**: One template handles all service pages
- **Data-driven**: Content comes from the services data file
- **Consistent**: Every service page has the same structure and features

## 🚀 Benefits of This Architecture

### For Development
- **Easy to extend**: Add new features without breaking existing code
- **Type-safe**: Catch errors before they reach users
- **Consistent**: Reusable components ensure uniform experience
- **Maintainable**: Clear structure makes debugging and updates simple

### For Content Management
- **No code changes needed**: Update content by editing data files
- **Immediate updates**: Changes appear instantly on the website
- **Consistent formatting**: All services follow the same structure
- **Safe updates**: Type checking prevents data format errors

## 📚 Learning Resources

### For New Developers
- **Next.js 15 App Router**: Modern React framework with file-based routing
- **TypeScript**: JavaScript with type safety for better development experience  
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Animation library for smooth interactions

### File Relationships
- **Data flows** from `/data/services.ts` → **Components** → **Pages**
- **Types** in `/types/services.ts` ensure data consistency everywhere
- **Components** can be mixed and matched to create new page layouts
- **Styling** with Tailwind ensures visual consistency across all components

## Key Features Retained

### Core Pages
- **Homepage**: Hero, 2 services, featured content, newsletter CTA
- **Articles**: Simple listing without search/filters
- **Services**: 2 service cards with "Book Now" buttons
- **Service Details**: Centered pricing, simplified tabs (Overview, Process, FAQ)

### Removed Features
- Search and filtering on articles
- Featured articles section
- Service packages/bundles
- Testimonials system
- "Why Work With Me" sections
- Complex service metadata (deliverables, detailed testimonials)
- Multiple CTAs and redundant buttons

### Modular Components
- `ServicePricingCard`: Reusable pricing display
- `ServiceContentTabs`: Reusable content organization
- `CheckoutModal`: Simplified checkout flow

## Data Structure

### Services
- Only essential fields: id, title, slug, description, price, features, process
- Removed: deliverables, testimonials, stripePriceId, duration, gallery
- 2 services total: E-commerce Growth Audit ($497), Content Strategy Blueprint ($297)

### Types
- Simplified Service interface
- Removed unused types: ServicePackage, Testimonial, complex client portal types
- Clean checkout and booking types

## Adding New Content

### New Service
1. Add to `src/data/services.ts`
2. Include: id, title, slug, description, shortDescription, price, features, process, category
3. Service detail page will automatically work via dynamic routing

### New Page Section
1. Create component in `src/components/sections/`
2. Import and use in `src/app/page.tsx`
3. Follow existing pattern with motion animations

### New UI Component
1. Add to `src/components/ui/`
2. Follow existing shadcn/ui patterns
3. Export from component file

## Best Practices
- Keep components small and focused
- Use TypeScript for type safety
- Follow Next.js App Router conventions
- Maintain consistent styling with Tailwind CSS
- Use Framer Motion for animations consistently
