# CodeVisionary Studio Website

This is the official repository for the CodeVisionary Studio website, a modern web application built with [Next.js](https://nextjs.org/).

## Features

### Recent Updates

#### Testimonials Section
- Enhanced testimonials section with a modern carousel using Swiper.js
- Added automatic scrolling functionality for testimonials
- Implemented circular profile images for each testimonial
- Styled navigation buttons with sea blue color (#1e90ff)
- Improved responsive design for better mobile viewing

#### Clients Section
- Created a new animated client showcase with smooth horizontal scrolling
- Implemented an infinite scroll effect using CSS animations
- Displayed client logos in a single line with consistent spacing
- Added subtle fade effects on the edges for a polished look
- Optimized for performance with hardware-accelerated animations

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

### Key Components

- `components/Homepage/Testimonials/Testimonials.jsx` - Testimonials carousel with Swiper integration
- `components/Homepage/Clients/MovingClients.tsx` - Animated client logo showcase with CSS animations
- `components/Homepage/Clients/Work_With_Clients.tsx` - Client section wrapper component

## Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS** - For utility-first styling
- **Swiper.js** - For testimonial carousel functionality
- **CSS Animations** - For smooth client logo scrolling

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
