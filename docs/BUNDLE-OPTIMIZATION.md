# Bundle Optimization Guide

**Project:** Gender Cell IIT Kanpur Website
**Created:** 2025-12-22
**Version:** 1.0

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Bundle Analysis](#current-bundle-analysis)
3. [Animation Libraries Audit](#animation-libraries-audit)
4. [Optimization Recommendations](#optimization-recommendations)
5. [Implementation Guide](#implementation-guide)
6. [Performance Metrics](#performance-metrics)

---

## Executive Summary

### Current State

The website currently uses **multiple animation libraries** that contribute to bundle size:

- **framer-motion** (v11.3.24) - ~60KB gzipped
- **react-awesome-reveal** (v4.2.12) - ~15KB gzipped
- **swiper** (v12.0.3) - ~45KB gzipped
- **react-type-animation** (v3.2.0) - ~8KB gzipped
- **react-slick** (v0.30.2) - ~20KB gzipped (NOT CURRENTLY USED)

**Total Animation Libraries Size:** ~148KB gzipped (~420KB uncompressed)

### Goals

1. Reduce animation library bundle size by 30-40%
2. Consolidate overlapping functionality
3. Improve tree-shaking effectiveness
4. Maintain existing animation quality

### Expected Impact

- **Bundle Size Reduction:** 40-60KB gzipped
- **Faster Initial Load:** 200-400ms improvement on 3G
- **Better Performance Score:** +5-10 Lighthouse points

---

## Current Bundle Analysis

### Animation Libraries Usage

#### 1. Framer Motion

**Version:** 11.3.24
**Size:** ~60KB gzipped
**Usage Locations:**

- `src/components/Sections/HomeHero.tsx` - Hero section animations
- `src/components/Cards/EventCard.tsx` - Card hover and reveal animations

**Current Import Pattern:**
```tsx
import { motion } from 'framer-motion';
```

**Assessment:** ✅ **KEEP** - Primary animation library, well-optimized, provides core functionality

---

#### 2. React Awesome Reveal

**Version:** 4.2.12
**Size:** ~15KB gzipped
**Usage Locations:**

- `src/pages/Events.tsx` - Scroll reveal animations

**Current Import Pattern:**
```tsx
import { Fade, Slide } from 'react-awesome-reveal';
```

**Assessment:** ⚠️ **REPLACE** - Functionality can be replicated with Framer Motion

**Overlap with Framer Motion:**
- Both provide scroll-triggered animations
- Both provide fade/slide effects
- Framer Motion is more flexible and performant

---

#### 3. Swiper

**Version:** 12.0.3
**Size:** ~45KB gzipped
**Usage Locations:**

- `src/pages/Events.tsx` - Event gallery carousel

**Current Import Pattern:**
```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
```

**Assessment:** ✅ **KEEP** - Specialized carousel library with touch support, no good alternative in Framer Motion

**Optimization Opportunities:**
- Use modular imports to reduce bundle size
- Only import required Swiper modules

---

#### 4. React Type Animation

**Version:** 3.2.0
**Size:** ~8KB gzipped
**Usage Locations:**

- `src/components/animation/typing.tsx` - Typing animation effect

**Current Import Pattern:**
```tsx
import { TypeAnimation } from 'react-type-animation';
```

**Assessment:** ⚠️ **EVALUATE** - Small library, but typing effect can be created with Framer Motion or CSS

**Decision Factors:**
- If used in multiple places: Keep
- If used once: Consider replacing with custom solution

---

#### 5. React Slick

**Version:** 0.30.2
**Size:** ~20KB gzipped
**Usage Locations:**

- ❌ **NOT USED** - Only appears in package.json

**Assessment:** 🔴 **REMOVE IMMEDIATELY** - Unused dependency adding to node_modules size

---

### Other Large Dependencies

#### Chart.js

**Size:** ~50KB gzipped
**Usage:** Data visualization (if used in SurveysResult.tsx)
**Assessment:** ✅ Keep if actively used for data visualization

#### Material Tailwind

**Size:** ~80KB gzipped
**Usage:** Component library
**Assessment:** ⚠️ **EVALUATE** - May overlap with DaisyUI, audit usage

---

## Animation Libraries Audit

### Detailed Usage Analysis

#### Files Using Animations

1. **src/components/Sections/HomeHero.tsx**
   ```tsx
   import { motion } from 'framer-motion';

   // Usage: Fade-in animations for hero text
   <motion.h1
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
   >
   ```
   **Status:** ✅ Optimal use of Framer Motion

---

2. **src/components/Cards/EventCard.tsx**
   ```tsx
   import { motion } from 'framer-motion';

   // Usage: Card hover and entrance animations
   ```
   **Status:** ✅ Optimal use of Framer Motion

---

3. **src/pages/Events.tsx**
   ```tsx
   import { Fade, Slide } from 'react-awesome-reveal';
   import { Swiper, SwiperSlide } from 'swiper/react';

   // Usage:
   // - Scroll reveals with react-awesome-reveal
   // - Event gallery carousel with Swiper
   ```
   **Status:** ⚠️ Can replace react-awesome-reveal with Framer Motion
   **Status:** ✅ Swiper is appropriate for carousel

---

4. **src/components/animation/typing.tsx**
   ```tsx
   import { TypeAnimation } from 'react-type-animation';

   // Usage: Typing effect animation
   ```
   **Status:** ⚠️ Evaluate usage frequency

---

### Animation Overlap Matrix

| Feature | Framer Motion | React Awesome Reveal | Swiper | React Type | React Slick |
|---------|--------------|---------------------|--------|------------|-------------|
| Fade In/Out | ✅ | ✅ | ❌ | ❌ | ❌ |
| Slide | ✅ | ✅ | ❌ | ❌ | ❌ |
| Scroll Triggers | ✅ | ✅ | ❌ | ❌ | ❌ |
| Carousel | ❌ | ❌ | ✅ | ❌ | ✅ |
| Typing Effect | ✅ (custom) | ❌ | ❌ | ✅ | ❌ |
| Gestures | ✅ | ❌ | ✅ | ❌ | ❌ |
| Performance | Excellent | Good | Excellent | Good | Good |

**Key Insight:** Framer Motion can replace React Awesome Reveal functionality with better performance.

---

## Optimization Recommendations

### Priority 1: Remove Unused Dependencies (IMMEDIATE)

**Action:** Remove `react-slick` package

```bash
npm uninstall react-slick
npm uninstall @types/react-slick  # if installed
```

**Impact:**
- Bundle size reduction: ~20KB gzipped
- Cleaner node_modules
- Effort: 2 minutes

---

### Priority 2: Replace React Awesome Reveal with Framer Motion (HIGH)

**Current Code (Events.tsx):**
```tsx
import { Fade, Slide } from 'react-awesome-reveal';

<Fade>
  <div>Content here</div>
</Fade>
```

**Optimized Code:**
```tsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const FadeInWhenVisible = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
```

**Benefits:**
- Bundle size reduction: ~15KB gzipped
- Single animation library to maintain
- Better performance with Framer Motion's optimizations
- Effort: 1-2 hours

**Steps:**
1. Create reusable Framer Motion scroll reveal components
2. Replace all `react-awesome-reveal` imports in Events.tsx
3. Test animations work correctly
4. Uninstall `react-awesome-reveal`

---

### Priority 3: Optimize Swiper Imports (MEDIUM)

**Current Code:**
```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
```

**Optimized Code:**
```tsx
// Only import needed modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Only import minimal CSS
import 'swiper/css/bundle';
```

**Benefits:**
- Bundle size reduction: ~10KB gzipped
- Faster initialization
- Effort: 30 minutes

---

### Priority 4: Evaluate React Type Animation (LOW)

**Option A: Keep (if used frequently)**
- Small library (~8KB)
- Specialized functionality
- Good developer experience

**Option B: Replace with Custom Framer Motion**

```tsx
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const TypeAnimation = ({ text }: { text: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const displayText = useTransform(rounded, latest => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      duration: 2,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return <motion.span>{displayText}</motion.span>;
};
```

**Decision Criteria:**
- If used in 1 place only: Replace with custom solution
- If used in 3+ places: Keep the library

**Benefits (if replaced):**
- Bundle size reduction: ~8KB gzipped
- One less dependency
- Effort: 1 hour

---

### Priority 5: Audit Material Tailwind (MEDIUM)

**Current Status:** Listed in dependencies (v2.1.9, ~80KB gzipped)

**Action Required:**
1. Search codebase for Material Tailwind usage
2. Evaluate if functionality can be replaced with DaisyUI
3. If not heavily used, migrate to DaisyUI

**Potential Impact:**
- Bundle size reduction: Up to 80KB if removed
- Reduced style conflicts
- Effort: 4-8 hours (depends on usage)

---

## Implementation Guide

### Phase 1: Quick Wins (1-2 hours)

#### Step 1: Remove react-slick

```bash
npm uninstall react-slick
```

**Verification:**
```bash
npm run build
# Check that build succeeds without errors
```

---

#### Step 2: Optimize Swiper Imports

1. Update `src/pages/Events.tsx`:
   ```tsx
   // Before
   import { Swiper, SwiperSlide } from 'swiper/react';
   import 'swiper/css';

   // After
   import { Swiper, SwiperSlide } from 'swiper/react';
   import { Autoplay, Navigation } from 'swiper/modules';
   import 'swiper/css';
   import 'swiper/css/navigation';

   // Add modules prop to Swiper component
   <Swiper modules={[Autoplay, Navigation]} ...>
   ```

2. Test carousel functionality

---

### Phase 2: Replace React Awesome Reveal (2-3 hours)

#### Step 1: Create Reusable Scroll Animation Components

Create `src/components/Common/ScrollAnimations.tsx`:

```tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
}

/**
 * FadeIn - Fade in when element enters viewport
 */
export const FadeIn: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

/**
 * SlideIn - Slide in from bottom when element enters viewport
 */
export const SlideIn: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

/**
 * ZoomIn - Zoom in when element enters viewport
 */
export const ZoomIn: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
```

---

#### Step 2: Update Events.tsx

```tsx
// Before
import { Fade, Slide } from 'react-awesome-reveal';

<Fade>
  <h2>Events</h2>
</Fade>

// After
import { FadeIn, SlideIn } from '@/components/Common/ScrollAnimations';

<FadeIn>
  <h2>Events</h2>
</FadeIn>
```

---

#### Step 3: Test and Uninstall

```bash
# Test all animations work
npm run dev
# Navigate to all pages and verify animations

# If all good, uninstall
npm uninstall react-awesome-reveal
```

---

### Phase 3: Evaluate and Optimize (2-4 hours)

#### Task 1: Audit react-type-animation Usage

```bash
# Find all usages
grep -r "react-type-animation" src/
```

**If used in 1 location:**
- Replace with custom Framer Motion solution
- Uninstall package

**If used in 3+ locations:**
- Keep the package (cost/benefit ratio favors keeping)

---

#### Task 2: Audit Material Tailwind Usage

```bash
# Find all usages
grep -r "@material-tailwind" src/
```

**Create migration plan if heavily used:**
1. Identify all Material Tailwind components used
2. Find DaisyUI equivalents
3. Migrate component by component
4. Test thoroughly

---

## Performance Metrics

### Before Optimization

**Expected Metrics (Current State):**
- Bundle Size: ~450KB gzipped
- Animation Libraries: ~148KB gzipped
- Lighthouse Performance: 75-85

---

### After Phase 1 (Quick Wins)

**Expected Improvements:**
- Bundle Size: ~420KB gzipped (-30KB)
- Animation Libraries: ~118KB gzipped (-30KB)
- Lighthouse Performance: +2-3 points
- Time Investment: 1-2 hours

---

### After Phase 2 (Replace React Awesome Reveal)

**Expected Improvements:**
- Bundle Size: ~405KB gzipped (-45KB)
- Animation Libraries: ~103KB gzipped (-45KB)
- Lighthouse Performance: +3-5 points
- Time Investment: 3-5 hours total

---

### After Phase 3 (Full Optimization)

**Expected Improvements:**
- Bundle Size: ~350-390KB gzipped (-60-100KB)
- Animation Libraries: ~95KB gzipped (-53KB)
- Lighthouse Performance: +5-10 points
- Time Investment: 5-9 hours total

---

## Monitoring and Maintenance

### Bundle Size Tracking

Add bundle analysis to your build process:

```bash
# Install bundle analyzer
npm install --save-dev vite-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'vite-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
```

**Usage:**
```bash
npm run build
# Opens visualization of bundle size
```

---

### Performance Benchmarks

**Run Lighthouse Regularly:**
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:5173 --view
```

**Track Key Metrics:**
- First Contentful Paint (FCP) - Target: < 1.5s
- Largest Contentful Paint (LCP) - Target: < 2.5s
- Total Blocking Time (TBT) - Target: < 200ms
- Cumulative Layout Shift (CLS) - Target: < 0.1
- Speed Index - Target: < 3.0s

---

### Dependency Audit

**Run Monthly:**
```bash
# Check for unused dependencies
npm install -g depcheck
depcheck

# Check for updates
npm outdated

# Security audit
npm audit
```

---

## Action Items Summary

### Immediate (Do Now)

- [x] ✅ Document current animation library usage
- [ ] 🔴 Remove react-slick package
- [ ] 🔴 Optimize Swiper imports

**Time:** 30 minutes
**Impact:** -30KB bundle size

---

### Short-term (This Week)

- [ ] 🟡 Create ScrollAnimations.tsx with Framer Motion
- [ ] 🟡 Replace react-awesome-reveal in Events.tsx
- [ ] 🟡 Test all animations thoroughly
- [ ] 🟡 Uninstall react-awesome-reveal

**Time:** 2-3 hours
**Impact:** -15KB bundle size

---

### Medium-term (This Month)

- [ ] 🟢 Audit react-type-animation usage
- [ ] 🟢 Decide: keep or replace with custom solution
- [ ] 🟢 Audit Material Tailwind usage
- [ ] 🟢 Install bundle analyzer
- [ ] 🟢 Run baseline performance tests

**Time:** 3-4 hours
**Impact:** -8-88KB bundle size (depends on decisions)

---

## Resources

### Documentation

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Swiper API](https://swiperjs.com/react)
- [Vite Bundle Analysis](https://vitejs.dev/guide/build.html#build-optimization)
- [Web Vitals](https://web.dev/vitals/)

### Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Bundle Phobia](https://bundlephobia.com/) - Check package sizes
- [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)
- [Vite Plugin Visualizer](https://github.com/btd/rollup-plugin-visualizer)

---

## Changelog

### Version 1.0 (2025-12-22)
- Initial bundle optimization audit
- Animation libraries analyzed
- Optimization roadmap created
- Implementation guide provided

---

**For questions or implementation support, contact the development team.**
