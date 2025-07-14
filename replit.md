# Dho Roho Translator - Replit Configuration

## Overview

This is a full-stack web application that provides translation between Luo and Dho Roho languages, built for the Ruwe Holy Ghost Church community. The application features a React frontend with a Node.js/Express backend, using modern web technologies and a clean, accessible design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage (expandable to PostgreSQL sessions)

### Key Design Decisions

**Frontend Choices**:
- Chose Wouter over React Router for smaller bundle size and simpler API
- Used shadcn/ui for consistent, accessible component library
- Implemented CSS variables for easy theming and dark mode support
- TanStack Query provides robust caching and server state management

**Backend Choices**:
- Express.js chosen for simplicity and extensive ecosystem
- Drizzle ORM provides type-safe database operations with PostgreSQL
- In-memory storage for development, easily replaceable with database sessions
- Modular route structure for scalability

## Key Components

### Translation Engine
- **Location**: `client/src/components/translator.tsx`
- **Purpose**: Core translation logic between Luo and Dho Roho languages
- **Features**: Bidirectional translation with complex character mapping rules

### Navigation System
- **Location**: `client/src/components/navigation.tsx`
- **Features**: Responsive design with mobile menu, active route highlighting

### UI Component Library
- **Location**: `client/src/components/ui/`
- **System**: shadcn/ui components built on Radix UI primitives
- **Styling**: Consistent design system with Tailwind CSS

### Database Schema
- **Location**: `shared/schema.ts`
- **ORM**: Drizzle with PostgreSQL dialect
- **Current Tables**: Users table with authentication fields
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **Client-Side Routing**: Wouter handles navigation without page refreshes
2. **Translation Logic**: Client-side processing with predefined mapping rules
3. **API Communication**: TanStack Query manages HTTP requests to Express backend
4. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
5. **Session Management**: Express middleware with optional PostgreSQL session store

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, TypeScript
- **UI Libraries**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority for variants
- **State Management**: TanStack React Query
- **Utilities**: clsx, tailwind-merge for conditional styling

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Build Tools
- **Development**: Vite with React plugin and runtime error overlay
- **Production**: esbuild for server bundling, Vite for client build
- **Database**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development Environment
- **Server**: tsx with hot reloading for TypeScript
- **Client**: Vite dev server with HMR
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Production Build
- **Client**: Vite builds optimized static assets to `dist/public`
- **Server**: esbuild bundles Express app to `dist/index.js`
- **Database**: Drizzle migrations applied via `npm run db:push`

### Platform Configuration
- **Vercel**: Configured with `vercel.json` for seamless deployment
- **Build Command**: `npm run build` (Vite + esbuild)
- **Start Command**: `npm start` (production Node.js server)
- **Replit**: Development environment with automatic dependency management

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment specification (development/production)

## Notable Features

- **Accessibility**: Full keyboard navigation and screen reader support
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: End-to-end TypeScript with shared schema validation
- **Performance**: Optimized builds with code splitting and lazy loading
- **Cultural Sensitivity**: Designed specifically for Ruwe Holy Ghost Church community
- **Offline Capability**: Translation logic works without internet connection