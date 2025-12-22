# Image Optimization Guide

**Project:** Gender Cell IIT Kanpur Website
**Created:** 2025-12-22
**Version:** 1.0

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Image Audit](#current-image-audit)
3. [Optimization Strategies](#optimization-strategies)
4. [Implementation Guide](#implementation-guide)
5. [Best Practices](#best-practices)
6. [Performance Impact](#performance-impact)

---

## Executive Summary

### Current State

The website uses **multiple image formats** across various sections:

- **Team photos:** 10 images (mix of JPG, JPEG, PNG)
- **Blog images:** 2 PNG files
- **Icons:** 9 PNG files
- **Page illustrations:** 15+ images (mix of PNG, JPG)
- **Logos:** 5 PNG files

### Issues Identified

1. ❌ **Mixed formats** - No consistent image format strategy
2. ❌ **No lazy loading** - All images load immediately
3. ❌ **PNG overuse** - PNGs used where JPG/WebP would be smaller
4. ❌ **No responsive images** - Same image served to all devices
5. ❌ **No modern formats** - No WebP or AVIF support
6. ❌ **Potentially unoptimized** - Original image sizes may be too large

### Goals

1. Reduce total image payload by 40-60%
2. Implement lazy loading for below-fold images
3. Use modern image formats (WebP, AVIF)
4. Serve responsive images based on device
5. Maintain visual quality

### Expected Impact

- **Page Load Time:** 1-3 seconds faster on slow connections
- **Bandwidth Savings:** 500KB-2MB per page load
- **Lighthouse Score:** +10-20 points
- **Mobile Experience:** Significantly improved

---

## Current Image Audit

### Image Inventory

#### Team Photos (`src/assets/team/`)

```
vaibhav.jpg        - Profile photo
jishnu.jpeg        - Profile photo
urbi.jpg           - Profile photo
priyanka.jpg       - Profile photo
pragati.jpeg       - Profile photo
rasagana.png       - Profile photo (⚠️ Should be JPG)
satyaki.png        - Profile photo (⚠️ Should be JPG)
jyoti.jpeg         - Profile photo
pushpender.jpeg    - Profile photo
devlina.png        - Profile photo (⚠️ Should be JPG)
```

**Issues:**
- ⚠️ Inconsistent formats (jpg, jpeg, png)
- ⚠️ PNGs used for photos (should be JPG/WebP)
- ⚠️ No WebP versions
- ⚠️ Potentially too large for web display

**Recommendations:**
- Convert all to WebP with JPG fallback
- Standardize naming: `.webp` + `.jpg`
- Optimize to ~100-150KB per image (from potentially 200-500KB)

---

#### Icons (`src/assets/icons/`)

```
faqs2.png          - FAQ icon
ICC1.png           - ICC icon
ICC2.png           - ICC icon
meet.png           - Meeting icon
Resources1.png     - Resources icon
support1.png       - Support icon (illustration)
support2.png       - Support icon
support3.png       - Support icon
```

**Issues:**
- ⚠️ All PNG format (good for transparency, but check if needed)
- ⚠️ May be larger than necessary

**Recommendations:**
- Keep PNG for icons with transparency
- Consider SVG for simple icons (infinitely scalable, smaller file size)
- Compress PNGs with tools like TinyPNG
- For complex icons without transparency, use WebP

---

#### Page Illustrations (`src/assets/images/`)

```
home.png                    - Home page illustration
icc.png                     - ICC page illustration
support_illustration.png    - Support page illustration
movie5.jpg                  - Event/movie image
movie6.jpg                  - Event/movie image
open1.jpg                   - Event image
open2.jpg                   - Event image
open3.jpg                   - Event image
survey_img/2-8.png         - Survey result images
```

**Issues:**
- ⚠️ Large illustrations not optimized
- ⚠️ No lazy loading implemented
- ⚠️ No responsive images

**Recommendations:**
- Convert large illustrations to WebP
- Implement lazy loading
- Create responsive image sets
- Compress all images

---

#### Logos (`src/assets/images/`)

```
logo-gc.png           - Gender Cell logo
logo-iitk-dark.png    - IIT Kanpur logo (dark)
logo-iitk.png         - IIT Kanpur logo
logo_gc_new.png       - New Gender Cell logo
```

**Issues:**
- ⚠️ Multiple versions of logos (inconsistent usage)
- ⚠️ May not be optimized

**Recommendations:**
- **Convert to SVG if possible** (logos are ideal for vector format)
- If raster required, use WebP with PNG fallback
- Optimize PNG with lossless compression
- Consolidate duplicate logos

---

#### Blog Images (`src/assets/blogs/`)

```
sneha.png          - Author photo
sonal.png          - Author photo
```

**Issues:**
- ⚠️ PNG used for photos (should be JPG/WebP)

**Recommendations:**
- Convert to WebP with JPG fallback
- Optimize file size

---

### Format Recommendations by Use Case

| Use Case | Current Format | Recommended Format | Reason |
|----------|---------------|-------------------|---------|
| Team Photos | JPG/PNG | WebP + JPG fallback | 25-35% smaller than JPG |
| Blog Photos | PNG | WebP + JPG fallback | 25-35% smaller than JPG |
| Icons (simple) | PNG | SVG | Infinitely scalable, tiny file size |
| Icons (complex) | PNG | PNG (optimized) or WebP | Transparency + compression |
| Illustrations | PNG | WebP + PNG fallback | Significant size savings |
| Event Photos | JPG | WebP + JPG fallback | Better compression |
| Logos | PNG | SVG preferred, or WebP + PNG | Scalable or optimized |

---

## Optimization Strategies

### Strategy 1: Convert to WebP Format

**What is WebP?**
- Modern image format developed by Google
- 25-35% smaller than JPG/PNG with same visual quality
- Supports transparency (like PNG)
- Supported by 97%+ of browsers

**Conversion Process:**

1. **Install conversion tool:**
   ```bash
   # Using npm
   npm install -g webp-converter

   # Or use online tools:
   # - https://squoosh.app/
   # - https://cloudconvert.com/
   ```

2. **Convert images:**
   ```bash
   # Single image
   cwebp input.jpg -q 85 -o output.webp

   # Batch convert (all JPG in directory)
   for file in *.jpg; do
     cwebp "$file" -q 85 -o "${file%.jpg}.webp"
   done
   ```

3. **Quality settings:**
   - `-q 85`: High quality (recommended for photos)
   - `-q 90`: Very high quality (for important images)
   - `-q 75`: Good quality, smaller size

---

### Strategy 2: Implement Lazy Loading

**What is Lazy Loading?**
- Images load only when they're about to enter the viewport
- Improves initial page load time
- Reduces bandwidth for users who don't scroll

**Implementation:**

#### Modern Browser Native Lazy Loading

```tsx
// Simple implementation
<img
  src="team-photo.jpg"
  alt="Team member name"
  loading="lazy"
  width="300"
  height="400"
/>
```

**Benefits:**
- Native browser support (no JavaScript required)
- Supported by 97%+ of browsers
- Zero configuration

**Usage Guidelines:**
- ✅ Use `loading="lazy"` for all images below the fold
- ✅ Always specify `width` and `height` to prevent layout shift
- ❌ Don't use for above-the-fold images (hero, logo)

---

#### Advanced Lazy Loading with Intersection Observer

For more control, use React lazy loading library:

```bash
npm install react-lazy-load-image-component
```

```tsx
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

<LazyLoadImage
  src="team-photo.webp"
  alt="Team member name"
  effect="blur"
  placeholderSrc="team-photo-tiny.jpg"  // Tiny placeholder
  width={300}
  height={400}
/>
```

---

### Strategy 3: Responsive Images

**Serve different image sizes based on device:**

```tsx
<picture>
  {/* WebP for modern browsers */}
  <source
    type="image/webp"
    srcSet="
      team-photo-small.webp 400w,
      team-photo-medium.webp 800w,
      team-photo-large.webp 1200w
    "
    sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
  />

  {/* JPG fallback for older browsers */}
  <source
    type="image/jpeg"
    srcSet="
      team-photo-small.jpg 400w,
      team-photo-medium.jpg 800w,
      team-photo-large.jpg 1200w
    "
    sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
  />

  {/* Fallback img */}
  <img
    src="team-photo-medium.jpg"
    alt="Team member name"
    loading="lazy"
    width={800}
    height={600}
  />
</picture>
```

---

### Strategy 4: Image Compression

**Lossless Compression Tools:**

1. **TinyPNG / TinyJPG**
   - Website: https://tinypng.com/
   - Reduces file size by 50-80% without visible quality loss
   - Supports batch processing

2. **Squoosh** (by Google)
   - Website: https://squoosh.app/
   - Advanced controls for compression
   - Compare before/after visually

3. **ImageOptim** (Mac)
   - Desktop app for batch optimization
   - Removes metadata and optimizes compression

4. **Sharp** (Node.js)
   ```bash
   npm install sharp
   ```

   ```javascript
   const sharp = require('sharp');

   sharp('input.jpg')
     .resize(800, 600)
     .webp({ quality: 85 })
     .toFile('output.webp');
   ```

---

### Strategy 5: Use SVG for Logos and Icons

**Benefits:**
- Infinitely scalable (perfect for any screen size)
- Tiny file size (often < 5KB)
- Can be styled with CSS
- No quality loss

**When to Use SVG:**
- ✅ Logos
- ✅ Simple icons
- ✅ Illustrations with solid colors
- ❌ Photos (use WebP/JPG instead)
- ❌ Complex gradients/effects

**Optimization:**
```bash
# Install SVGO
npm install -g svgo

# Optimize SVG
svgo input.svg -o output.svg
```

---

## Implementation Guide

### Phase 1: Quick Wins (2-3 hours)

#### Task 1: Add Lazy Loading to Existing Images

1. **Find all images in components:**
   ```bash
   grep -r "<img" src/
   ```

2. **Add `loading="lazy"` attribute:**

   **Before:**
   ```tsx
   <img src={teamImage} alt="Team member" />
   ```

   **After:**
   ```tsx
   <img
     src={teamImage}
     alt="Team member"
     loading="lazy"
     width={300}
     height={400}
   />
   ```

3. **Exclude above-the-fold images:**
   - Hero section images
   - Logos in navbar
   - First visible content

**Impact:** 30-50% faster initial page load

---

#### Task 2: Compress Existing Images

1. **Batch compress with TinyPNG:**
   - Visit https://tinypng.com/
   - Upload all team photos
   - Download optimized versions
   - Replace originals

2. **Or use CLI tool:**
   ```bash
   npm install -g tinypng-cli
   tinypng src/assets/team/*.{jpg,jpeg,png} --key YOUR_API_KEY
   ```

**Impact:** 40-60% reduction in image file sizes

---

### Phase 2: Convert to WebP (3-4 hours)

#### Task 1: Generate WebP Versions

```bash
# Install conversion tool
npm install --save-dev @squoosh/cli

# Create script in package.json
"scripts": {
  "optimize-images": "squoosh-cli --webp auto src/assets/**/*.{jpg,jpeg,png}"
}

# Run optimization
npm run optimize-images
```

---

#### Task 2: Create Image Component with WebP Support

Create `src/components/Common/OptimizedImage.tsx`:

```tsx
import React from 'react';

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * OptimizedImage Component
 *
 * Automatically serves WebP with fallback to original format.
 * Includes lazy loading and proper dimensions.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
}) => {
  // Auto-generate WebP path if not provided
  const webpSource = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <picture>
      {/* WebP version for modern browsers */}
      <source type="image/webp" srcSet={webpSource} />

      {/* Original format fallback */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
      />
    </picture>
  );
};

export default OptimizedImage;
```

---

#### Task 3: Update Components to Use OptimizedImage

**Before:**
```tsx
<img src={teamImages.vaibhav} alt="Vaibhav" />
```

**After:**
```tsx
import { OptimizedImage } from '@/components/Common/OptimizedImage';

<OptimizedImage
  src={teamImages.vaibhav}
  alt="Vaibhav - Team Member"
  width={300}
  height={400}
  loading="lazy"
/>
```

---

### Phase 3: Advanced Optimizations (4-6 hours)

#### Task 1: Implement Responsive Images

Generate multiple sizes:

```bash
# Install Sharp
npm install --save-dev sharp

# Create optimization script
node scripts/generate-responsive-images.js
```

**scripts/generate-responsive-images.js:**
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [400, 800, 1200];
const inputDir = './src/assets/team';
const outputDir = './src/assets/team/responsive';

fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/)) {
    sizes.forEach(size => {
      sharp(path.join(inputDir, file))
        .resize(size)
        .webp({ quality: 85 })
        .toFile(
          path.join(outputDir, `${path.parse(file).name}-${size}w.webp`)
        );
    });
  }
});
```

---

#### Task 2: Convert Logos to SVG

1. **Use online converters:**
   - https://convertio.co/png-svg/
   - https://vectorizer.com/

2. **Or hire designer to recreate as vector**

3. **Update imports:**
   ```tsx
   // Before
   import logoGC from '@/assets/images/logo-gc.png';

   // After
   import logoGC from '@/assets/images/logo-gc.svg';
   ```

---

#### Task 3: Implement Progressive Image Loading

Create blur-up effect:

```tsx
import { useState } from 'react';

const ProgressiveImage: React.FC<{ src: string; placeholder: string; alt: string }> = ({
  src,
  placeholder,
  alt
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Blurred placeholder */}
      <img
        src={placeholder}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ filter: 'blur(10px)' }}
      />

      {/* Full resolution image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
      />
    </div>
  );
};
```

---

## Best Practices

### Image Format Selection Guide

```
┌─────────────────────────────────────────────────────────┐
│ Decision Tree: Which Image Format?                     │
└─────────────────────────────────────────────────────────┘

Is it a logo or simple icon?
├─ YES → Use SVG
└─ NO  → Continue

Does it need transparency?
├─ YES → Use WebP (with PNG fallback)
└─ NO  → Continue

Is it a photograph?
├─ YES → Use WebP (with JPG fallback)
└─ NO  → Use WebP (with PNG fallback)
```

---

### Dimension Guidelines

**Team Photos:**
- Original: 800x800px max
- Display: 300x300px typical
- Responsive sizes: 400w, 800w

**Page Illustrations:**
- Original: 1200px max width
- Display: Varies by layout
- Responsive sizes: 600w, 1200w, 1800w

**Icons:**
- SVG: No size limit (scalable)
- PNG: 2x display size (e.g., 64x64 for 32x32 display)

**Logos:**
- SVG: Preferred
- PNG: 2x-3x display size for retina screens

---

### File Size Targets

| Image Type | Target Size | Max Acceptable |
|------------|-------------|----------------|
| Team Photo | 50-80KB | 150KB |
| Icon | 5-15KB | 30KB |
| Page Illustration | 80-150KB | 300KB |
| Logo | 5-20KB | 50KB |
| Background | 100-200KB | 400KB |

---

### Naming Conventions

**Use descriptive, consistent names:**

```
✅ GOOD:
team-vaibhav-800w.webp
team-vaibhav-400w.webp
icon-support-primary.svg
logo-gender-cell.svg
event-workshop-2024-01.jpg

❌ BAD:
img1.jpg
photo_final_FINAL.png
unnamed.webp
DSC_0042.jpg
```

---

### Accessibility Requirements

**Always include alt text:**

```tsx
// ✅ GOOD: Descriptive alt text
<img src="team-photo.jpg" alt="Vaibhav Kumar - Team Coordinator" />

// ❌ BAD: Generic or missing alt text
<img src="team-photo.jpg" alt="photo" />
<img src="team-photo.jpg" />

// ✅ GOOD: Decorative image (alt="")
<img src="decorative-pattern.svg" alt="" role="presentation" />
```

---

## Performance Impact

### Before Optimization

**Estimated Current State:**
- Total image payload: ~3-5MB per page
- Largest Contentful Paint (LCP): 3-5 seconds
- Team photos: ~200-500KB each (10 photos = 2-5MB)
- Icons: ~20-50KB each (9 icons = 180-450KB)
- Page illustrations: ~200-800KB each

**Performance Score:**
- Lighthouse: 60-70
- Mobile: Slow to load on 3G

---

### After Phase 1 (Lazy Loading + Compression)

**Expected Improvements:**
- Total initial payload: ~1-2MB (60% reduction)
- LCP: 2-3 seconds (33% faster)
- Team photos: ~80-150KB each (50% reduction)
- Icons: ~10-25KB each (50% reduction)

**Performance Score:**
- Lighthouse: 75-85 (+15 points)
- Mobile: Acceptable on 3G

---

### After Phase 2 (WebP Conversion)

**Expected Improvements:**
- Total initial payload: ~600KB-1.2MB (75% reduction)
- LCP: 1.5-2.5 seconds (50% faster)
- Team photos: ~40-80KB each (75% reduction)
- Icons: ~5-15KB each (70% reduction)

**Performance Score:**
- Lighthouse: 85-92 (+25 points)
- Mobile: Fast on 3G, instant on 4G

---

### After Phase 3 (Full Optimization)

**Expected Improvements:**
- Total initial payload: ~400-800KB (85% reduction)
- LCP: 1-2 seconds (67% faster)
- Progressive loading improves perceived performance
- Responsive images save mobile bandwidth

**Performance Score:**
- Lighthouse: 90-98 (+30 points)
- Mobile: Excellent performance

---

## Monitoring and Maintenance

### Image Audit Checklist

Run monthly:

- [ ] Check for new unoptimized images
- [ ] Verify all images have alt text
- [ ] Confirm lazy loading is working
- [ ] Test on slow connection (throttle in DevTools)
- [ ] Check Lighthouse image recommendations
- [ ] Verify WebP is being served to modern browsers

---

### Performance Testing

```bash
# Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=http://localhost:5173

# Check image-specific metrics
# - Largest Contentful Paint (LCP)
# - Total Blocking Time (TBT)
# - Cumulative Layout Shift (CLS)
```

---

### Automation

**Add to CI/CD pipeline:**

```yaml
# .github/workflows/image-optimization.yml
name: Image Optimization Check

on: [pull_request]

jobs:
  check-images:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Check for large images
        run: |
          find src/assets -type f \( -name "*.jpg" -o -name "*.png" \) -size +500k
          if [ $? -eq 0 ]; then
            echo "❌ Large images found (>500KB). Please optimize."
            exit 1
          fi

      - name: Check for missing alt text
        run: |
          grep -r "<img" src/ | grep -v "alt=" && exit 1 || exit 0
```

---

## Action Items Summary

### Immediate (This Week)

- [ ] 🔴 Add `loading="lazy"` to all below-fold images
- [ ] 🔴 Add width/height attributes to all images
- [ ] 🔴 Compress existing images with TinyPNG
- [ ] 🔴 Audit and add missing alt text

**Time:** 2-3 hours
**Impact:** 40-50% faster page loads

---

### Short-term (This Month)

- [ ] 🟡 Convert all photos to WebP format
- [ ] 🟡 Create OptimizedImage component
- [ ] 🟡 Update all image imports to use OptimizedImage
- [ ] 🟡 Convert simple icons/logos to SVG

**Time:** 4-6 hours
**Impact:** 60-70% reduction in image payload

---

### Long-term (This Quarter)

- [ ] 🟢 Implement responsive images
- [ ] 🟢 Add progressive loading with blur-up
- [ ] 🟢 Set up automated image optimization pipeline
- [ ] 🟢 Add image performance monitoring

**Time:** 6-8 hours
**Impact:** 70-80% reduction, optimal performance

---

## Resources

### Tools

- [TinyPNG](https://tinypng.com/) - Image compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization
- [Sharp](https://sharp.pixelplumbing.com/) - Node.js image processing

### Documentation

- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [MDN Picture Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [WebP Documentation](https://developers.google.com/speed/webp)

---

## Changelog

### Version 1.0 (2025-12-22)
- Initial image optimization audit
- Current state documented
- Optimization strategies defined
- Implementation roadmap created

---

**For implementation support, contact the development team.**
