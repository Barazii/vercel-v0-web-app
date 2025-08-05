# Copilot Instructions for Personal Website Project

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a comprehensive personal website built with Next.js 14+, TypeScript, and Tailwind CSS. The site serves multiple purposes:

### Core Features
- **Journalism Content**: Articles, videos, podcasts, social media embeds
- **E-commerce Case Studies**: Portfolio showcasing professional work
- **Services Checkout**: Direct booking/purchasing system with Stripe and MetaMask support
- **Email List Segmentation**: Separate forms for journalism and e-commerce subscribers

### Technology Stack
- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **CMS**: Sanity for content management
- **Database**: Supabase for backend operations
- **Payments**: Stripe + MetaMask integration
- **UI Components**: Radix UI primitives with custom styling
- **Animation**: Framer Motion
- **Forms**: React Hook Form with Zod validation

### API Integrations
- Contact forms (Mailchimp/Supabase)
- Social platforms: Instagram, TikTok, LinkedIn, GitHub
- Professional: Fiverr, Patreon, Substack
- Payments: Stripe, MetaMask

### Design Principles
- Clean, modern, and professional aesthetic
- Fully responsive (mobile/tablet/desktop)
- Accessible and SEO-optimized
- Fast loading with optimized assets
- Future-proof architecture

### File Structure
- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions and configurations
- `/src/types` - TypeScript type definitions
- `/src/styles` - Global styles and Tailwind config

When generating code, prioritize:
1. Type safety with TypeScript
2. Component reusability
3. Performance optimization
4. Accessibility standards
5. Clean, maintainable code structure
