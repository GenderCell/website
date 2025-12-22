import React from 'react';

export interface SectionProps {
  /**
   * Section content
   */
  children: React.ReactNode;

  /**
   * Background variant
   * - default: bg-base-100 (white/main background)
   * - alternate: bg-base-200 (light gray - for alternating sections)
   * - custom: No background class applied (use className prop)
   */
  background?: 'default' | 'alternate' | 'custom';

  /**
   * Vertical padding size
   * - normal: py-16 md:py-20 (standard section spacing)
   * - large: py-20 md:py-24 (more spacious)
   * - small: py-12 md:py-16 (compact)
   * - none: No padding (for custom layouts)
   */
  spacing?: 'normal' | 'large' | 'small' | 'none';

  /**
   * Container width
   * - container: Standard Tailwind container with max-width
   * - full: Full width (no container)
   * - narrow: Smaller max-width for focused content
   */
  width?: 'container' | 'full' | 'narrow';

  /**
   * Additional custom CSS classes
   */
  className?: string;

  /**
   * HTML id attribute (useful for anchor links)
   */
  id?: string;

  /**
   * Semantic HTML tag to use
   * - section: Default semantic section tag
   * - div: Generic container
   * - article: Article content
   * - aside: Sidebar content
   */
  as?: 'section' | 'div' | 'article' | 'aside';
}

/**
 * Section Component
 *
 * A reusable section wrapper that provides consistent spacing, backgrounds,
 * and container widths across the website.
 *
 * @example
 * // Standard section
 * <Section>
 *   <h2>Section Title</h2>
 *   <p>Section content...</p>
 * </Section>
 *
 * @example
 * // Alternate background section
 * <Section background="alternate">
 *   <h2>Highlighted Section</h2>
 *   <p>This section has a gray background...</p>
 * </Section>
 *
 * @example
 * // Large spacing section
 * <Section spacing="large">
 *   <h2>Hero Section</h2>
 *   <p>More spacious layout...</p>
 * </Section>
 *
 * @example
 * // Full width section (no container)
 * <Section width="full" background="alternate">
 *   <div className="px-4">Custom full-width content</div>
 * </Section>
 *
 * @example
 * // Section with ID for anchor links
 * <Section id="about-us">
 *   <h2>About Us</h2>
 * </Section>
 */
export const Section: React.FC<SectionProps> = ({
  children,
  background = 'default',
  spacing = 'normal',
  width = 'container',
  className = '',
  id,
  as: Component = 'section',
}) => {
  // Background classes
  const backgroundClasses = {
    default: 'bg-base-100',
    alternate: 'bg-base-200',
    custom: '',
  };

  // Spacing classes (vertical padding)
  const spacingClasses = {
    normal: 'py-16 md:py-20',
    large: 'py-20 md:py-24',
    small: 'py-12 md:py-16',
    none: '',
  };

  // Combine section wrapper classes
  const sectionClasses = [
    backgroundClasses[background],
    spacingClasses[spacing],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Render with container
  if (width === 'container') {
    return (
      <Component id={id} className={sectionClasses}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {children}
        </div>
      </Component>
    );
  }

  // Render with narrow container
  if (width === 'narrow') {
    return (
      <Component id={id} className={sectionClasses}>
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          {children}
        </div>
      </Component>
    );
  }

  // Render full width (no container)
  return (
    <Component id={id} className={sectionClasses}>
      {children}
    </Component>
  );
};

// ============================================================================
// Section Variants (Convenience Components)
// ============================================================================

/**
 * HeroSection Component
 *
 * Pre-configured section for hero/banner content with large spacing.
 *
 * @example
 * <HeroSection>
 *   <h1>Welcome to Gender Cell</h1>
 *   <p>Creating an inclusive campus...</p>
 * </HeroSection>
 */
export const HeroSection: React.FC<Omit<SectionProps, 'spacing'>> = (props) => (
  <Section spacing="large" {...props} />
);

/**
 * ContentSection Component
 *
 * Pre-configured section for main content with standard spacing and container.
 *
 * @example
 * <ContentSection>
 *   <h2>Our Mission</h2>
 *   <p>Content here...</p>
 * </ContentSection>
 */
export const ContentSection: React.FC<Omit<SectionProps, 'spacing' | 'width'>> = (
  props
) => <Section spacing="normal" width="container" {...props} />;

/**
 * AlternateSection Component
 *
 * Pre-configured section with alternate background for visual rhythm.
 *
 * @example
 * <AlternateSection>
 *   <h2>Featured Content</h2>
 *   <p>This section stands out with a gray background...</p>
 * </AlternateSection>
 */
export const AlternateSection: React.FC<Omit<SectionProps, 'background'>> = (
  props
) => <Section background="alternate" {...props} />;

/**
 * CompactSection Component
 *
 * Pre-configured section with smaller spacing for tighter layouts.
 *
 * @example
 * <CompactSection>
 *   <h3>Quick Info</h3>
 *   <p>Brief content...</p>
 * </CompactSection>
 */
export const CompactSection: React.FC<Omit<SectionProps, 'spacing'>> = (props) => (
  <Section spacing="small" {...props} />
);

/**
 * FullWidthSection Component
 *
 * Pre-configured section without container for full-width layouts.
 * You'll need to add your own container/padding inside.
 *
 * @example
 * <FullWidthSection>
 *   <div className="w-full">
 *     <img src="banner.jpg" alt="Full width banner" className="w-full" />
 *   </div>
 * </FullWidthSection>
 */
export const FullWidthSection: React.FC<Omit<SectionProps, 'width'>> = (props) => (
  <Section width="full" {...props} />
);

/**
 * NarrowSection Component
 *
 * Pre-configured section with narrow container for focused content (blogs, articles).
 *
 * @example
 * <NarrowSection>
 *   <article>
 *     <h1>Blog Post Title</h1>
 *     <p>Article content with comfortable reading width...</p>
 *   </article>
 * </NarrowSection>
 */
export const NarrowSection: React.FC<Omit<SectionProps, 'width'>> = (props) => (
  <Section width="narrow" {...props} />
);

// ============================================================================
// Export all components
// ============================================================================

export default {
  Section,
  HeroSection,
  ContentSection,
  AlternateSection,
  CompactSection,
  FullWidthSection,
  NarrowSection,
};
