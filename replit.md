# Overview

Novaweb is a modern web development studio portfolio application built with a full-stack TypeScript architecture. The application showcases web development services, projects, team information, and provides a contact form for client inquiries. It features a multilingual interface supporting English, Arabic, and French, with RTL (right-to-left) support for Arabic.

The application uses a monorepo structure with separate client and server codebases, sharing types and schemas through a common `shared` directory. The frontend is built with React and modern UI components, while the backend provides a minimal Express API foundation ready for extension.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with `wouter`, a lightweight React router (< 2KB). Routes are defined in `client/src/App.tsx` with the following pages:
- Home (`/`)
- About (`/about`)
- Projects (`/projects`)
- Contact (`/contact`)
- 404 Not Found (catch-all)

**UI Component System**: Built on shadcn/ui components with Radix UI primitives and Tailwind CSS. Uses the "new-york" style variant with neutral base colors. All UI components follow a consistent design system with CSS variables for theming, supporting both light and dark modes through CSS custom properties.

**State Management**: 
- React Query (`@tanstack/react-query`) for server state management and data fetching
- React Context API for global state (language preferences)
- Local component state with React hooks

**Styling Approach**: 
- Tailwind CSS with custom configuration extending the base theme
- CSS-in-JS using CSS variables for dynamic theming
- Custom CSS classes with `novaweb-` prefix for application-specific styles
- Responsive design with mobile-first approach

**Internationalization (i18n)**:
- Custom implementation using React Context (`LanguageProvider`)
- Supports English, Arabic (with RTL), and French
- Language selection persisted in localStorage
- Translation keys organized by feature in `client/src/lib/translations.ts`
- Dynamic direction switching (LTR/RTL) based on selected language

**Key Features**:
- Canvas-based particle animation on hero section using HTML5 Canvas API
- Scroll reveal animations for progressive disclosure
- Responsive navigation with mobile menu toggle
- Form submission to Formspree for contact inquiries
- Auto-rotating testimonial carousel

## Backend Architecture

**Framework**: Express.js with TypeScript running on Node.js.

**Server Structure**:
- Entry point: `server/index.ts`
- Routes defined in `server/routes.ts` (currently minimal, ready for expansion)
- Middleware for JSON parsing, URL encoding, and request logging
- Development mode integrates with Vite for HMR (Hot Module Replacement)

**Storage Layer**:
- Abstract `IStorage` interface defined in `server/storage.ts`
- Default in-memory implementation (`MemStorage`) for development
- Designed to be swapped with database implementations
- Currently includes basic User CRUD operations as examples

**Database Schema** (Drizzle ORM):
- PostgreSQL dialect configured via `drizzle.config.ts`
- Schema defined in `shared/schema.ts`
- Users table with UUID primary keys, unique usernames, and password fields
- Uses `drizzle-zod` for automatic Zod schema generation from database schema

**API Design Philosophy**:
- RESTful conventions with `/api` prefix for all API routes
- Request/response logging with execution time tracking
- Error handling with appropriate HTTP status codes
- JSON responses with captured response logging (truncated to 80 chars)

**Build Process**:
- Development: `tsx` for direct TypeScript execution with watch mode
- Production: Vite builds frontend, esbuild bundles backend
- Single deployment artifact with frontend served as static files from backend

## External Dependencies

**Database**:
- PostgreSQL database via `@neondatabase/serverless` driver
- Drizzle ORM (`drizzle-orm`) for type-safe database queries
- Connection string expected in `DATABASE_URL` environment variable
- Migrations stored in `./migrations` directory

**Third-Party Services**:
- **Formspree**: Contact form submission handling (endpoint: `https://formspree.io/f/xldpnrap`)
- **Google Fonts**: Typography loaded from Google Fonts CDN (Tajawal, Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- No authentication service currently integrated (foundational User schema exists)

**Development Tools**:
- Replit-specific plugins for enhanced development experience:
  - `@replit/vite-plugin-runtime-error-modal` for error overlay
  - `@replit/vite-plugin-cartographer` for code navigation
  - `@replit/vite-plugin-dev-banner` for development indicators

**UI Component Libraries**:
- Radix UI: Comprehensive set of unstyled, accessible UI primitives
- Embla Carousel: Carousel/slider functionality
- Recharts: Charting library (included but not yet utilized)
- Lucide React: Icon library

**Form Handling**:
- React Hook Form with Zod resolver for type-safe form validation
- Zod schemas derived from database schema using `drizzle-zod`

**Notable Architectural Decisions**:

1. **Monorepo with Shared Types**: The `shared` directory allows type safety between client and server, eliminating API contract mismatches.

2. **Storage Abstraction**: The `IStorage` interface allows easy swapping between in-memory, PostgreSQL, or other database implementations without changing business logic.

3. **Static Asset Management**: A separate `attached_assets` directory contains original HTML/CSS/JS templates that were converted into the React application, serving as design references.

4. **Path Aliasing**: Configured in `tsconfig.json` and `vite.config.ts` for clean imports:
   - `@/*` maps to `client/src/*`
   - `@shared/*` maps to `shared/*`
   - `@assets/*` maps to `attached_assets/*`

5. **Environment-Specific Configuration**: Development mode includes additional Replit tooling, while production builds are optimized and self-contained.