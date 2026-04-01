# Implementation Guide: Divya N Modi Website

This guide outlines the step-by-step process for building the site using Next.js, Tailwind CSS, and GSAP.

## Phase 1: Project Setup
1.  **Initialize Next.js App:** `npx create-next-app@latest` with App Router, TypeScript, and Tailwind CSS.
2.  **Install Dependencies:**
    *   `npm install gsap lucide-react clsx tailwind-merge`
3.  **Configure Tailwind:** Set up the color palette (Navy, Gold, Off-White) and Typography (Playfair Display, Montserrat) in `tailwind.config.ts`.
4.  **Folder Structure:** Organize `components/` (UI, sections), `lib/` (utils), and `app/` (pages).

## Phase 2: Core Components & Layout
1.  **Navbar:** Responsive sticky header with desktop and mobile menu toggles.
2.  **Footer:** Multi-column layout with the Bar Council of India disclaimer.
3.  **Hero Section:** High-impact landing area with initial GSAP reveal animations.
4.  **Common UI:** Buttons, Input fields, and Cards for consistent design across pages.

## Phase 3: Homepage Sections
1.  **Practice Areas Grid:** Map over the specialization list to create the service cards.
2.  **About Highlight:** Summarize the client's 29-year experience.
3.  **Testimonials Carousel:** Implementing a smooth slider for client reviews.
4.  **Article Preview:** Section showcasing snippets from her "Adhikar" column.
5.  **Lead Form:** Integrated contact form for consultations.

## Phase 4: Dynamic Pages (Practice Areas & Articles)
1.  **Practice Area Templates:** Create a generic template page that renders content based on the specialization.
2.  **Article Listing:** A masonry or grid layout for the 200+ articles.
3.  **Article Content Page:** Readable, SEO-optimized page for individual articles.

## Phase 5: Motion & GSAP Integration
1.  **Smooth Scrolling:** Implement Lenis or GSAP ScrollSmoother.
2.  **Scroll Animations:** Use `gsap.fromTo` with `ScrollTrigger` for section entrance reveals.
3.  **Micro-interactions:** Add hover effects and button active states using GSAP.
4.  **Hover States:** Create elegant transitions for navigation and cards.

## Phase 6: SEO & Optimization
1.  **Metadata:** Add unique titles and meta descriptions for every page using Next.js Metadata API.
2.  **OpenGraph:** Configure social sharing images and tags.
3.  **Performance:** Optimize images using `next/image` and use font optimization for Google Fonts.
4.  **Schema.org:** Add JSON-LD for `LegalService` and `Person` to the layout.

## Phase 7: Final Polish & Deployment
1.  **Responsive Testing:** Verify design across all device sizes.
2.  **Form Validation:** Ensure contact form works correctly and has proper error handling.
3.  **Accessibility (a11y):** Check for proper ARIA labels and keyboard navigation.
4.  **Deploy to Vercel:** Connect GitHub repository and deploy.
