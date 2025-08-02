# Overview

This is an Arabic AI business solutions landing page application built with React, Express, and TypeScript. The application presents IISAL AI, a company offering artificial intelligence solutions to help businesses grow and improve operational efficiency. The site features a modern, dark-themed design with RTL (right-to-left) support for Arabic content, including services showcase, case studies, blog posts, and an interactive chat widget.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Internationalization**: Built-in RTL support with Arabic fonts (Cairo and Inter)

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Vite middleware integration for hot module replacement in development

## Component Structure
- **Modular Components**: Reusable UI components following atomic design principles
- **Data-driven Content**: Structured data files for services, case studies, blog posts, and FAQs
- **Interactive Elements**: Chat widget, service modals, and animated transitions
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## Development Environment
- **Build System**: Vite with React plugin and runtime error overlay
- **Type Safety**: Strict TypeScript configuration with path mapping
- **Code Quality**: ESLint and Prettier integration (implied by project structure)
- **Development Tools**: Replit-specific plugins for enhanced development experience

## Design System
- **Theme**: Dark navy color scheme with blue accent gradients
- **Typography**: Multi-font setup supporting both Arabic (Cairo) and Latin (Inter) scripts
- **Icons**: Font Awesome integration for consistent iconography
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Animations**: CSS transitions and intersection observer for scroll-triggered animations

## Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **User Model**: Basic user structure with ID, username, and password fields
- **Migrations**: Drizzle Kit configured for database migrations

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL dialect
- **drizzle-kit**: Database migration and introspection tool

## UI and Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

## React Ecosystem
- **@tanstack/react-query**: Server state management and data fetching
- **@hookform/resolvers**: Form validation resolver library
- **wouter**: Minimal client-side routing
- **react-hook-form**: Performant forms with validation

## Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting in Replit
- **@replit/vite-plugin-cartographer**: Development environment integration
- **tsx**: TypeScript execution engine for Node.js

## Additional Utilities
- **nanoid**: URL-safe unique ID generator
- **date-fns**: Modern JavaScript date utility library
- **zod**: TypeScript-first schema validation
- **cmdk**: Command palette component