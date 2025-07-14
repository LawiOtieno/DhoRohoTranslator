# Dho Roho Translator - Replit Configuration

## Overview

This is a frontend-only React application that provides translation between Luo and Dho Roho languages, built for the Ruwe Holy Ghost Church community. The application features a React frontend using modern web technologies with a clean, accessible design, and includes historical information about the church.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: React hooks for local component state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Note**: This application is frontend-only with no backend or database dependencies
- **Translation Logic**: Client-side processing with predefined mapping rules
- **Data Storage**: No persistent data storage required

### Key Design Decisions

**Frontend Choices**:
- Chose Wouter over React Router for smaller bundle size and simpler API
- Used shadcn/ui for consistent, accessible component library
- Implemented CSS variables for easy theming and dark mode support
- TanStack Query provides robust caching and server state management

**Frontend-Only Architecture**:
- No backend or database dependencies for maximum simplicity
- Client-side translation engine with comprehensive language mapping
- Static deployment-ready build for platforms like Vercel or Netlify

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

### Translation Engine
- **Location**: `client/src/components/translator.tsx`
- **Functionality**: Complete Luo ↔ Dho Roho translation with complex mapping rules
- **Features**: Real-time translation, bidirectional conversion, copy functionality

## Data Flow

1. **Client-Side Routing**: Wouter handles navigation without page refreshes
2. **Translation Logic**: Client-side processing with predefined mapping rules
3. **Local State Management**: React hooks manage component state and user interactions
4. **Static Content**: Church history and translation rules stored as component data

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