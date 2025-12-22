# Gender Cell IIT Kanpur - Design System

**Version:** 1.0
**Last Updated:** 2025-12-22
**Maintained by:** Gender Cell Web Team

---

## Table of Contents

1. [Introduction](#introduction)
2. [Core Principles](#core-principles)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Components](#components)
7. [Animations & Transitions](#animations--transitions)
8. [Accessibility Standards](#accessibility-standards)
9. [Best Practices](#best-practices)
10. [Code Examples](#code-examples)

---

## Introduction

### Purpose

This design system establishes consistent visual and interaction patterns across the Gender Cell IIT Kanpur website. It serves as the single source of truth for designers and developers working on the platform.

### Tech Stack

- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS + DaisyUI
- **Animations:** Framer Motion (primary), CSS Transitions (secondary)
- **Routing:** React Router DOM

### Design Philosophy

1. **Consistency First:** Use established patterns before creating new ones
2. **Accessibility by Default:** WCAG AA compliance minimum
3. **Performance Matters:** Optimize for mobile-first experiences
4. **Maintainability:** Prefer Tailwind utilities over custom CSS

---

## Core Principles

### 1. Theme-Based Colors Only

**✅ DO:**
- Use DaisyUI theme colors: `text-primary`, `bg-base-200`, `text-base-content`
- These automatically support dark mode and theme switching

**❌ DON'T:**
- Hardcoded colors: `text-slate-900`, `bg-indigo-50`, `#4F46E5`
- These break theme consistency and dark mode

### 2. Mobile-First Responsive Design

**✅ DO:**
- Design for mobile first, then add `md:` and `lg:` modifiers
- Use standard breakpoints: `md:` (768px), `lg:` (1024px)

**❌ DON'T:**
- Use `sm:`, `xl:`, `2xl:` unless absolutely necessary
- Desktop-first approaches

### 3. Semantic HTML

**✅ DO:**
- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic tags: `<nav>`, `<section>`, `<article>`, `<footer>`

**❌ DON'T:**
- Use `<div>` for everything
- Skip heading levels (h1 → h3)

---

## Color System

### Primary Palette

```css
/* DaisyUI Theme Colors */
--primary: #4F46E5        /* Slate Blue - Main brand color */
--secondary: #EC4899      /* Pink - Secondary actions */
--accent: #F59E0B         /* Amber - Highlights */
--neutral: #1F2937        /* Dark gray - Neutral elements */
```

### Usage Guidelines

#### Primary Color
**Use for:**
- Main CTAs (Call-to-Action buttons)
- Page headings
- Important links
- Active states

```tsx
// Example: Page heading
<h1 className="text-primary">About Gender Cell</h1>

// Example: Primary button
<button className="btn btn-primary">Get Started</button>
```

#### Secondary Color
**Use for:**
- Secondary actions
- Decorative accents
- Supporting visual elements

```tsx
// Example: Secondary button
<button className="btn btn-secondary">Learn More</button>
```

#### Accent Color
**Use for:**
- Highlights and badges
- Warning states (caution)
- Featured content markers

```tsx
// Example: Badge
<span className="badge badge-accent">New</span>
```

### Background Colors

```css
/* Background Hierarchy */
bg-base-100    /* #FFFFFF - Main page background (white) */
bg-base-200    /* #F3F4F6 - Card/section backgrounds (light gray) */
bg-base-300    /* #E5E7EB - Borders/dividers (medium gray) */
```

**Usage:**
```tsx
// Main page container
<div className="bg-base-100 min-h-screen">
  {/* Cards and sections */}
  <section className="bg-base-200 py-16">
    <div className="card bg-base-200 shadow-lg">
      {/* Card content */}
    </div>
  </section>
</div>
```

### Text Colors

```css
/* Text Color Hierarchy */
text-base-content       /* Primary text (100% opacity) - Headings */
text-base-content/80    /* Body text (80% opacity) - Main content */
text-base-content/70    /* Secondary text (70% opacity) - Labels, captions */
text-base-content/60    /* Meta text (60% opacity) - Timestamps (use sparingly) */
```

**Accessibility Note:** Always verify text-base-content/60 meets WCAG AA contrast ratio (4.5:1)

**Usage:**
```tsx
// Heading
<h2 className="text-base-content">Section Title</h2>

// Body paragraph
<p className="text-base-content/80">
  This is the main content of the paragraph...
</p>

// Caption
<span className="text-base-content/70 text-sm">Posted on Jan 1, 2025</span>
```

### Semantic Colors

**ONLY use for feedback and status messages:**

```css
text-success   /* ✅ Success messages, confirmations */
text-error     /* ❌ Error messages, destructive actions */
text-warning   /* ⚠️ Warning messages */
text-info      /* ℹ️ Information messages */
```

**❌ NEVER use semantic colors for:**
- Regular headings
- Decorative purposes
- Navigation links

**Example - Correct Usage:**
```tsx
// ✅ Success message
<div className="alert alert-success">
  <span className="text-success">Form submitted successfully!</span>
</div>

// ❌ WRONG: Using success for heading
<h2 className="text-success">Our Services</h2>  {/* DON'T DO THIS */}
```

---

## Typography

### Font Families

```css
/* Defined in tailwind.config.js */
font-heading: 'Poppins', sans-serif      /* For headings (h1-h6) */
font-sans: 'Inter', sans-serif           /* For body text */
```

### Typography Scale

#### Page Titles (H1)

```tsx
<h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
  About Us
</h1>
```

**Properties:**
- Mobile: `text-4xl` (36px)
- Desktop: `md:text-5xl` (48px)
- Weight: `font-bold` (700)
- Font: `font-heading`
- Color: `text-primary`
- Use: Once per page, main page heading

---

#### Section Titles (H2)

```tsx
<h2 className="text-3xl md:text-4xl font-bold font-heading text-base-content">
  Our Mission
</h2>
```

**Properties:**
- Mobile: `text-3xl` (30px)
- Desktop: `md:text-4xl` (36px)
- Weight: `font-bold` (700)
- Font: `font-heading`
- Color: `text-base-content`
- Use: Major section headings

---

#### Subsection Titles (H3)

```tsx
<h3 className="text-2xl md:text-3xl font-semibold font-heading text-base-content">
  Core Values
</h3>
```

**Properties:**
- Mobile: `text-2xl` (24px)
- Desktop: `md:text-3xl` (30px)
- Weight: `font-semibold` (600)
- Font: `font-heading`
- Color: `text-base-content`
- Use: Subsections within sections

---

#### Card Titles (H4)

```tsx
<h4 className="text-xl md:text-2xl font-semibold font-heading text-base-content">
  Event Name
</h4>
```

**Properties:**
- Mobile: `text-xl` (20px)
- Desktop: `md:text-2xl` (24px)
- Weight: `font-semibold` (600)
- Font: `font-heading`
- Color: `text-base-content`
- Use: Card headings, list items

---

### Body Text

#### Large Body Text

```tsx
<p className="text-lg leading-relaxed font-sans text-base-content/80">
  This is a large paragraph for hero sections and introductions.
</p>
```

**Properties:**
- Size: `text-lg` (18px)
- Line height: `leading-relaxed` (1.625)
- Font: `font-sans`
- Color: `text-base-content/80`
- Use: Hero descriptions, key paragraphs

---

#### Normal Body Text

```tsx
<p className="text-base leading-relaxed font-sans text-base-content/80">
  This is the standard body text for main content.
</p>
```

**Properties:**
- Size: `text-base` (16px)
- Line height: `leading-relaxed` (1.625)
- Font: `font-sans`
- Color: `text-base-content/80`
- Use: Main content paragraphs

---

#### Small Body Text

```tsx
<p className="text-sm leading-relaxed font-sans text-base-content/70">
  This is smaller text for secondary information.
</p>
```

**Properties:**
- Size: `text-sm` (14px)
- Line height: `leading-relaxed` (1.625)
- Font: `font-sans`
- Color: `text-base-content/70`
- Use: Captions, labels, secondary info

---

#### Captions & Metadata

```tsx
<span className="text-xs leading-normal font-sans text-base-content/60">
  Posted on December 22, 2025
</span>
```

**Properties:**
- Size: `text-xs` (12px)
- Line height: `leading-normal` (1.5)
- Font: `font-sans`
- Color: `text-base-content/60`
- Use: Timestamps, metadata, fine print
- **Note:** Verify WCAG AA contrast compliance

---

### Typography Best Practices

1. **Always use leading-relaxed for body text** - Improves readability
2. **Never use font-extrabold** - Use `font-bold` instead for consistency
3. **Never use font-serif** - Stick to defined font families
4. **Always pair font size with responsive variant** - e.g., `text-xl md:text-2xl`
5. **Use font-heading for all h1-h6** - Use `font-sans` for body text

---

## Spacing & Layout

### Page Container Padding

```tsx
<div className="container mx-auto px-4 md:px-6 lg:px-8">
  {/* Page content */}
</div>
```

**Properties:**
- Mobile: `px-4` (16px)
- Tablet: `md:px-6` (24px)
- Desktop: `lg:px-8` (32px)
- Center: `mx-auto`
- Max width: `container` (from Tailwind config)

---

### Section Padding (Vertical)

```tsx
<section className="py-16 md:py-20">
  {/* Section content */}
</section>
```

**Properties:**
- Mobile: `py-16` (64px top/bottom)
- Desktop: `md:py-20` (80px top/bottom)
- Use: For all major page sections

---

### Card Padding

#### Standard Cards

```tsx
<div className="card bg-base-200 shadow-lg">
  <div className="card-body p-6 md:p-8">
    {/* Card content */}
  </div>
</div>
```

**Properties:**
- Mobile: `p-6` (24px)
- Desktop: `md:p-8` (32px)

---

#### Large Cards

```tsx
<div className="card bg-base-200 shadow-lg">
  <div className="card-body p-8 md:p-10">
    {/* Card content */}
  </div>
</div>
```

**Properties:**
- Mobile: `p-8` (32px)
- Desktop: `md:p-10` (40px)
- Use: Hero cards, feature cards

---

### Gap Spacing

```css
/* Standardized gap values */
gap-4    /* 16px - Tight spacing */
gap-6    /* 24px - Standard spacing (recommended default) */
gap-8    /* 32px - Loose spacing */
```

**Usage:**
```tsx
// Grid layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>

// Flex layout
<div className="flex flex-col gap-4">
  {/* Flex items */}
</div>
```

**❌ Avoid:** `gap-3`, `gap-5`, `gap-7`, `gap-12` - Use standardized values only

---

### Margins Between Sections

```css
mb-8     /* 32px - Small spacing */
mb-12    /* 48px - Standard spacing */
mb-16    /* 64px - Large spacing */
```

**Usage:**
```tsx
<h2 className="text-3xl md:text-4xl font-bold mb-12">Section Title</h2>
```

---

## Components

### Buttons

#### Primary Button

```tsx
<button className="btn btn-primary">
  Primary Action
</button>
```

**Use for:** Main CTAs, important actions

---

#### Secondary Button (Outline)

```tsx
<button className="btn btn-outline btn-primary">
  Secondary Action
</button>
```

**Use for:** Secondary actions, alternative choices

---

#### Ghost Button

```tsx
<button className="btn btn-ghost">
  Subtle Action
</button>
```

**Use for:** Less important actions, navbar items

---

#### Button Sizes

```tsx
// Small
<button className="btn btn-primary btn-sm">Small</button>

// Default (Medium)
<button className="btn btn-primary">Default</button>

// Large
<button className="btn btn-primary btn-lg">Large CTA</button>
```

---

#### Button with Icon

```tsx
<button className="btn btn-primary">
  <svg className="w-5 h-5 mr-2">...</svg>
  With Icon
</button>
```

---

### Cards

#### Standard Card

```tsx
<div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
  <div className="card-body p-6 md:p-8">
    <h4 className="card-title text-xl md:text-2xl font-semibold text-base-content">
      Card Title
    </h4>
    <p className="text-base leading-relaxed text-base-content/80">
      Card content goes here...
    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

**Properties:**
- Background: `bg-base-200`
- Shadow: `shadow-lg` (base), `hover:shadow-xl` (hover)
- Transition: `transition-shadow duration-300`
- Padding: `p-6 md:p-8`

---

#### Card with Hover Lift

```tsx
<div className="card bg-base-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  {/* Card content */}
</div>
```

**Use for:** Interactive cards, clickable items

---

#### Card with Border

```tsx
<div className="card bg-base-200 shadow-lg border border-base-300">
  {/* Card content */}
</div>
```

**Use for:** When extra definition is needed

---

### Sections

#### Standard Section

```tsx
<section className="py-16 md:py-20">
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
      Section Title
    </h2>
    {/* Section content */}
  </div>
</section>
```

---

#### Alternate Background Section

```tsx
<section className="py-16 md:py-20 bg-base-200">
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

**Use for:** Alternating sections to create visual rhythm

---

### Forms

#### Input Field

```tsx
<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-base-content">Email Address</span>
  </label>
  <input
    type="email"
    placeholder="you@example.com"
    className="input input-bordered w-full"
    aria-label="Email Address"
  />
  <label className="label">
    <span className="label-text-alt text-base-content/70">
      We'll never share your email.
    </span>
  </label>
</div>
```

---

#### Textarea

```tsx
<div className="form-control">
  <label className="label">
    <span className="label-text text-base-content">Message</span>
  </label>
  <textarea
    className="textarea textarea-bordered h-24"
    placeholder="Your message..."
    aria-label="Message"
  ></textarea>
</div>
```

---

### Navigation

#### Navbar

```tsx
<nav className="navbar bg-base-100 shadow-lg">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-primary">
      Gender Cell
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-2">
      <li><Link to="/" className="btn btn-ghost">Home</Link></li>
      <li><Link to="/about" className="btn btn-ghost">About</Link></li>
      <li><Link to="/events" className="btn btn-ghost">Events</Link></li>
    </ul>
  </div>
</nav>
```

**Important:** Use `Link` from `react-router-dom`, not `<a href>`

---

### Accordions

```tsx
<div className="collapse collapse-arrow bg-base-200">
  <input type="checkbox" name={`accordion-${uniqueId}`} />
  <div className="collapse-title text-xl font-medium">
    Question Title
  </div>
  <div className="collapse-content">
    <p>Answer content...</p>
  </div>
</div>
```

**Important:** Use `type="checkbox"` (not radio) to allow multiple open accordions

---

## Animations & Transitions

### Primary Animation Library

**Framer Motion** - For complex animations (page transitions, scroll reveals)

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

---

### CSS Transitions

**For simple interactions** (hover, focus, scale)

#### Standard Hover Effect (Shadow)

```tsx
<div className="hover:shadow-xl transition-shadow duration-300">
  {/* Content */}
</div>
```

---

#### Hover Lift

```tsx
<div className="hover:-translate-y-1 transition-transform duration-300">
  {/* Content */}
</div>
```

---

#### Hover Scale

```tsx
<div className="hover:scale-[1.02] transition-transform duration-300">
  {/* Content */}
</div>
```

---

### Animation Duration Standards

```css
duration-200   /* 200ms - Quick interactions (button hover) */
duration-300   /* 300ms - Standard (default for most transitions) */
duration-500   /* 500ms - Slow animations (page transitions, reveals) */
```

**✅ Use `duration-300` as default**

**❌ Avoid custom durations** like `duration-700`, `duration-400`

---

### Easing

```css
ease-in-out    /* Default easing for all transitions */
```

**Usage:**
```tsx
<div className="transition-all duration-300 ease-in-out">
  {/* Content */}
</div>
```

---

## Accessibility Standards

### WCAG AA Compliance

All components must meet **WCAG 2.1 Level AA** standards minimum.

---

### Color Contrast

**Text Contrast Requirements:**
- Normal text (< 18px): **4.5:1** minimum
- Large text (≥ 18px): **3:1** minimum
- Interactive elements: **3:1** minimum

**Testing:**
```tsx
// ⚠️ Verify text-base-content/60 contrast
<p className="text-base-content/60 text-sm">
  This may fail WCAG AA - test with DevTools
</p>

// ✅ Safer alternative
<p className="text-base-content/70 text-sm">
  This has better contrast
</p>
```

**Tools:**
- Chrome DevTools (Lighthouse)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

### ARIA Labels

**All interactive elements without visible text need ARIA labels:**

```tsx
// Icon-only button
<button
  className="btn btn-ghost"
  aria-label="Toggle navigation menu"
>
  <MenuIcon />
</button>

// Icon link
<a
  href="https://twitter.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Follow us on Twitter"
>
  <TwitterIcon />
</a>
```

---

### Focus Indicators

**All interactive elements must have visible focus states:**

```tsx
// Default DaisyUI buttons already have focus states
<button className="btn btn-primary">
  Click Me
</button>

// Custom interactive element
<div
  className="cursor-pointer focus:ring-2 focus:ring-primary focus:ring-offset-2"
  tabIndex={0}
  role="button"
>
  Custom Interactive Element
</div>
```

---

### Semantic HTML

```tsx
// ✅ GOOD: Proper heading hierarchy
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>

// ❌ BAD: Skipping levels
<h1>Page Title</h1>
  <h3>Section</h3>  {/* Skipped h2 */}
```

---

### Keyboard Navigation

**All interactive elements must be keyboard accessible:**
- Tab: Navigate forward
- Shift + Tab: Navigate backward
- Enter/Space: Activate buttons/links
- Escape: Close modals/dropdowns

**Testing:** Navigate entire site using only keyboard

---

### Alt Text for Images

```tsx
// Decorative images
<img src="pattern.svg" alt="" role="presentation" />

// Informative images
<img
  src="event-photo.jpg"
  alt="Students participating in Gender Sensitization Workshop 2025"
/>

// Functional images (logo links)
<Link to="/">
  <img
    src="logo.svg"
    alt="Gender Cell IIT Kanpur - Home"
  />
</Link>
```

---

## Best Practices

### Component Development

1. **Always use existing components first** - Check `src/components/Common/` before creating new ones
2. **Keep components small and focused** - Single responsibility principle
3. **Use TypeScript interfaces** - Define prop types explicitly
4. **Export reusable types** - Share interfaces between components

---

### File Organization

```
src/
├── components/
│   ├── Common/          # Reusable base components
│   ├── Cards/           # Card variants
│   ├── Sections/        # Page sections
│   ├── Navbar/          # Navigation
│   └── Footer/          # Footer
├── pages/               # Route pages
├── types/               # TypeScript types
└── utils/               # Helper functions
```

---

### Naming Conventions

```tsx
// Component files: PascalCase
HomeCard.tsx
ContactCard.tsx
SupportService.tsx

// Component names: Match file name
export const HomeCard: React.FC<HomeCardProps> = ({ ... }) => { ... }

// Props interfaces: ComponentNameProps
interface HomeCardProps {
  title: string;
  description: string;
}

// Utility files: camelCase
dateFormatter.ts
apiHelper.ts
```

---

### CSS Class Ordering

**Recommended order for Tailwind classes:**

1. Layout (display, position)
2. Flexbox/Grid
3. Spacing (margin, padding)
4. Sizing (width, height)
5. Typography (font, text size, color)
6. Visual (background, border, shadow)
7. Interactivity (hover, focus, transition)

**Example:**
```tsx
<div className="
  flex flex-col              {/* Layout */}
  gap-4                      {/* Grid/Flex */}
  p-6 md:p-8                 {/* Spacing */}
  w-full max-w-md            {/* Sizing */}
  text-base text-base-content/80  {/* Typography */}
  bg-base-200 shadow-lg border border-base-300  {/* Visual */}
  hover:shadow-xl transition-shadow duration-300  {/* Interactivity */}
">
  {/* Content */}
</div>
```

---

### Performance Optimization

1. **Lazy load images below the fold**
```tsx
<img src="image.jpg" loading="lazy" alt="Description" />
```

2. **Use React.memo for expensive components**
```tsx
export const ExpensiveCard = React.memo(({ data }) => {
  // Component logic
});
```

3. **Code split routes**
```tsx
const About = lazy(() => import('./pages/About'));
```

4. **Minimize animation libraries**
- Prefer CSS transitions for simple effects
- Use Framer Motion only for complex animations

---

## Code Examples

### Complete Page Template

```tsx
import { motion } from 'framer-motion';

const ExamplePage: React.FC = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold font-heading text-primary text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Page Title
          </motion.h1>

          <p className="text-lg leading-relaxed font-sans text-base-content/80 text-center max-w-3xl mx-auto">
            Hero description paragraph with large text for better readability.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 bg-base-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-base-content text-center mb-12">
            Section Title
          </h2>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Example */}
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="card-body p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-semibold font-heading text-base-content mb-4">
                  Card Title
                </h4>
                <p className="text-base leading-relaxed font-sans text-base-content/80">
                  Card description with standard body text styling.
                </p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>

            {/* Repeat cards... */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamplePage;
```

---

### Complete Card Component

```tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  actionText?: string;
  actionLink?: string;
  variant?: 'default' | 'hover-lift' | 'hover-scale';
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  actionText = 'Learn More',
  actionLink = '#',
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'shadow-lg hover:shadow-xl transition-shadow duration-300',
    'hover-lift': 'shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
    'hover-scale': 'shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300',
  };

  return (
    <div className={`card bg-base-200 ${variantClasses[variant]}`}>
      <div className="card-body p-6 md:p-8">
        <h4 className="text-xl md:text-2xl font-semibold font-heading text-base-content mb-4">
          {title}
        </h4>
        <p className="text-base leading-relaxed font-sans text-base-content/80">
          {description}
        </p>
        {actionLink && (
          <div className="card-actions justify-end mt-4">
            <a href={actionLink} className="btn btn-primary">
              {actionText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
```

---

### Responsive Grid Layout

```tsx
{/* 1 column on mobile, 2 on tablet, 3 on desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <Card key={item.id} {...item} />
  ))}
</div>

{/* 1 column on mobile, 2 on tablet, 4 on desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map((item) => (
    <Card key={item.id} {...item} />
  ))}
</div>

{/* Auto-fit with min width */}
<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
  {items.map((item) => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

---

## Changelog

### Version 1.0 (2025-12-22)
- Initial design system documentation
- Established typography scale
- Defined color system
- Component standards documented
- Accessibility guidelines added
- Code examples provided

---

## Maintenance

This design system is a living document. When making changes:

1. **Update this document first** - Before implementing new patterns
2. **Get team consensus** - Discuss major changes with team
3. **Update examples** - Keep code examples current
4. **Version updates** - Increment version number and update changelog
5. **Communicate changes** - Notify team of updates

---

## Resources

### External Links
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/components/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/resources/)

### Internal Files
- Implementation Plan: `UI-UX-IMPLEMENTATION-PLAN.md`
- Tailwind Config: `tailwind.config.js`
- Base Styles: `src/index.css`

---

**For questions or suggestions, contact the Gender Cell Web Team.**
