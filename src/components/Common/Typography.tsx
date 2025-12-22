import React from 'react';

// ============================================================================
// Heading Components
// ============================================================================

interface HeadingProps {
  /**
   * Heading content
   */
  children: React.ReactNode;

  /**
   * Additional custom CSS classes
   */
  className?: string;

  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Custom color override (use sparingly - prefer theme colors)
   */
  color?: 'primary' | 'secondary' | 'base-content';

  /**
   * HTML id attribute
   */
  id?: string;
}

/**
 * PageTitle Component (H1)
 *
 * Use once per page for the main page heading.
 * Responsive: text-4xl on mobile, text-5xl on desktop
 *
 * @example
 * <PageTitle>About Gender Cell</PageTitle>
 *
 * @example
 * <PageTitle align="center" color="primary">
 *   Welcome to Our Website
 * </PageTitle>
 */
export const PageTitle: React.FC<HeadingProps> = ({
  children,
  className = '',
  align = 'left',
  color = 'primary',
  id,
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    'base-content': 'text-base-content',
  };

  return (
    <h1
      id={id}
      className={`text-4xl md:text-5xl font-bold font-heading ${colorClasses[color]} ${alignClasses[align]} ${className}`}
    >
      {children}
    </h1>
  );
};

/**
 * SectionTitle Component (H2)
 *
 * Use for major section headings within a page.
 * Responsive: text-3xl on mobile, text-4xl on desktop
 *
 * @example
 * <SectionTitle>Our Mission</SectionTitle>
 *
 * @example
 * <SectionTitle align="center">Recent Events</SectionTitle>
 */
export const SectionTitle: React.FC<HeadingProps> = ({
  children,
  className = '',
  align = 'left',
  color = 'base-content',
  id,
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    'base-content': 'text-base-content',
  };

  return (
    <h2
      id={id}
      className={`text-3xl md:text-4xl font-bold font-heading ${colorClasses[color]} ${alignClasses[align]} ${className}`}
    >
      {children}
    </h2>
  );
};

/**
 * SubsectionTitle Component (H3)
 *
 * Use for subsections within major sections.
 * Responsive: text-2xl on mobile, text-3xl on desktop
 *
 * @example
 * <SubsectionTitle>Core Values</SubsectionTitle>
 */
export const SubsectionTitle: React.FC<HeadingProps> = ({
  children,
  className = '',
  align = 'left',
  color = 'base-content',
  id,
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    'base-content': 'text-base-content',
  };

  return (
    <h3
      id={id}
      className={`text-2xl md:text-3xl font-semibold font-heading ${colorClasses[color]} ${alignClasses[align]} ${className}`}
    >
      {children}
    </h3>
  );
};

/**
 * CardTitle Component (H4)
 *
 * Use for card headings, list items, and smaller section titles.
 * Responsive: text-xl on mobile, text-2xl on desktop
 *
 * @example
 * <CardTitle>Event Name</CardTitle>
 */
export const CardTitle: React.FC<HeadingProps> = ({
  children,
  className = '',
  align = 'left',
  color = 'base-content',
  id,
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    'base-content': 'text-base-content',
  };

  return (
    <h4
      id={id}
      className={`text-xl md:text-2xl font-semibold font-heading ${colorClasses[color]} ${alignClasses[align]} ${className}`}
    >
      {children}
    </h4>
  );
};

// ============================================================================
// Body Text Components
// ============================================================================

interface BodyTextProps {
  /**
   * Text content
   */
  children: React.ReactNode;

  /**
   * Additional custom CSS classes
   */
  className?: string;

  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';

  /**
   * HTML tag to render (default: p)
   */
  as?: 'p' | 'span' | 'div';
}

/**
 * BodyLarge Component
 *
 * Use for hero descriptions, introductory paragraphs, and key content.
 * Font size: text-lg (18px)
 *
 * @example
 * <BodyLarge>
 *   Welcome to the Gender Cell at IIT Kanpur. We work towards creating
 *   an inclusive and safe campus environment for everyone.
 * </BodyLarge>
 */
export const BodyLarge: React.FC<BodyTextProps> = ({
  children,
  className = '',
  align = 'left',
  as: Component = 'p',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  return (
    <Component
      className={`text-lg leading-relaxed font-sans text-base-content/80 ${alignClasses[align]} ${className}`}
    >
      {children}
    </Component>
  );
};

/**
 * Body Component (Default)
 *
 * Use for standard body text and main content paragraphs.
 * Font size: text-base (16px)
 *
 * @example
 * <Body>
 *   This is a standard paragraph with regular body text.
 * </Body>
 */
export const Body: React.FC<BodyTextProps> = ({
  children,
  className = '',
  align = 'left',
  as: Component = 'p',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  return (
    <Component
      className={`text-base leading-relaxed font-sans text-base-content/80 ${alignClasses[align]} ${className}`}
    >
      {children}
    </Component>
  );
};

/**
 * BodySmall Component
 *
 * Use for secondary information, captions, and supporting text.
 * Font size: text-sm (14px)
 *
 * @example
 * <BodySmall>
 *   Additional details and secondary information.
 * </BodySmall>
 */
export const BodySmall: React.FC<BodyTextProps> = ({
  children,
  className = '',
  align = 'left',
  as: Component = 'p',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  return (
    <Component
      className={`text-sm leading-relaxed font-sans text-base-content/70 ${alignClasses[align]} ${className}`}
    >
      {children}
    </Component>
  );
};

/**
 * Caption Component
 *
 * Use for metadata, timestamps, fine print, and labels.
 * Font size: text-xs (12px)
 *
 * NOTE: Verify WCAG AA contrast compliance when using this component.
 *
 * @example
 * <Caption>Posted on December 22, 2025</Caption>
 */
export const Caption: React.FC<BodyTextProps> = ({
  children,
  className = '',
  align = 'left',
  as: Component = 'span',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  return (
    <Component
      className={`text-xs leading-normal font-sans text-base-content/60 ${alignClasses[align]} ${className}`}
    >
      {children}
    </Component>
  );
};

// ============================================================================
// Link Component
// ============================================================================

interface LinkProps {
  /**
   * Link content
   */
  children: React.ReactNode;

  /**
   * Link destination
   */
  href: string;

  /**
   * Additional custom CSS classes
   */
  className?: string;

  /**
   * Open link in new tab
   */
  external?: boolean;

  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
}

/**
 * TextLink Component
 *
 * Use for inline text links with consistent styling.
 * Automatically adds security attributes for external links.
 *
 * @example
 * <TextLink href="/about">Learn more about us</TextLink>
 *
 * @example
 * <TextLink href="https://example.com" external>
 *   Visit our partner site
 * </TextLink>
 */
export const TextLink: React.FC<LinkProps> = ({
  children,
  href,
  className = '',
  external = false,
  ariaLabel,
}) => {
  const baseClasses = 'link link-primary hover:link-hover transition-colors duration-300';

  if (external) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`${baseClasses} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

// ============================================================================
// Export all components
// ============================================================================

export default {
  PageTitle,
  SectionTitle,
  SubsectionTitle,
  CardTitle,
  BodyLarge,
  Body,
  BodySmall,
  Caption,
  TextLink,
};
