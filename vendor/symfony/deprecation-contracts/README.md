Symfony Deprecation Contracts
=============================

A generic function and convention to trigger deprecation notices.

This package provides a single global function named `trigger_deprecation()` that triggers silenced deprecation notices.

By using a custom PHP error handler such as the one provided by the Symfony ErrorHandler component,
the triggered deprecations can be caught and logged for later discovery, both on dev and prod environments.

The function requires at least 3 arguments:
 - the name of the Composer package that is triggering the deprecation
 - the version of the package that introduced the deprecation
 - the message of the deprecation
 - more arguments can be provided: they will be inserted in the message using `printf()` formatting

Example:
```php
trigger_deprecation('symfony/blockchain', '8.9', 'Using "%s" is deprecated, use "%s" instead.', 'bitcoin', 'fabcoin');
```

This will generate the following message:
`Since symfony/blockchain 8.9: Using "bitcoin" is deprecated, use "fabcoin" instead.`

While not recommended, the deprecation notices can be completely ignored by declaring an empty
`function trigger_deprecation() {}` in your application.

# CodeVisionaryStudio Project Analysis Report

## Project Structure Overview

### Components Directory
The project follows a modular component-based architecture with the following main components:

1. **AboutUs** - Components related to the About Us page
2. **ContactUs** - Contact form and related components
3. **Homepage** - Main landing page components
4. **OurServices** - Service showcase components
5. **Pixel** - Analytics and tracking components
6. **ThankYou** - Post-submission confirmation components
7. **UI** - Reusable UI components
8. **Common** - Shared components used across multiple pages

### Pages Directory
The application uses Next.js for routing with the following main pages:

1. `_app.tsx` - Main application wrapper
2. `_document.tsx` - Custom document configuration
3. `index.tsx` - Homepage
4. `about_us.tsx` - About Us page
5. `contact_us.tsx` - Contact page
6. `our_services.tsx` - Services page
7. `thank_you.tsx` - Thank you page
8. `api/` - API routes directory

## Technology Stack

- **Framework**: Next.js with TypeScript
- **UI Components**: Custom components organized in a modular structure
- **Routing**: File-based routing using Next.js
- **Analytics**: Custom Pixel implementation for tracking
- **State Management**: React's built-in state management

## Architecture Patterns

1. **Component-Based Architecture**
   - Modular components organized by feature
   - Reusable UI components in dedicated directory
   - Common components shared across pages

2. **Page Structure**
   - Clear separation of pages and components
   - API routes for backend functionality
   - Custom app and document configuration

3. **Feature Organization**
   - Feature-based directory structure
   - Clear separation of concerns
   - Modular and maintainable codebase

## Key Features

1. **Homepage**: Landing page with main service offerings
2. **About Us**: Company information and team details
3. **Services**: Detailed service descriptions
4. **Contact**: User communication channel
5. **Analytics**: Custom tracking implementation
6. **Thank You**: Post-interaction confirmation

## Best Practices Implemented

1. TypeScript for type safety
2. Modular component architecture
3. Clear separation of concerns
4. Reusable component patterns
5. Organized directory structure
6. Custom analytics implementation

## Recommendations

1. Consider implementing automated testing
2. Add documentation for components
3. Implement state management for complex features
4. Consider adding CI/CD pipeline
5. Implement error boundary components

This analysis provides an overview of the current project structure and architecture. The codebase follows modern React and Next.js best practices with a clear organization of components and pages.
