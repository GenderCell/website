import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  /**
   * Button variant style
   * - primary: Solid primary color button
   * - secondary: Solid secondary color button
   * - outline: Outlined button with transparent background
   * - ghost: Minimal styling for subtle actions
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';

  /**
   * Button size
   * - sm: Small button
   * - md: Default/medium button
   * - lg: Large button (for CTAs)
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Button content (text, icons, etc.)
   */
  children: React.ReactNode;

  /**
   * Click handler for button actions
   */
  onClick?: () => void;

  /**
   * Optional href for link buttons (internal routing)
   * When provided, renders as React Router Link
   */
  to?: string;

  /**
   * Optional external URL for anchor links
   * When provided, renders as <a> tag with target="_blank"
   */
  href?: string;

  /**
   * Button type attribute (for form submissions)
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Full width button
   */
  fullWidth?: boolean;

  /**
   * Additional custom CSS classes
   */
  className?: string;

  /**
   * ARIA label for accessibility (required for icon-only buttons)
   */
  ariaLabel?: string;

  /**
   * Icon to display before button text
   */
  startIcon?: React.ReactNode;

  /**
   * Icon to display after button text
   */
  endIcon?: React.ReactNode;
}

/**
 * Reusable Button Component
 *
 * A flexible button component that supports multiple variants, sizes, and can render as:
 * - Button: Standard clickable button
 * - Link: React Router internal link
 * - Anchor: External link with security attributes
 *
 * @example
 * // Primary button
 * <Button variant="primary" onClick={handleClick}>
 *   Click Me
 * </Button>
 *
 * @example
 * // Internal link button
 * <Button variant="outline" to="/about">
 *   Learn More
 * </Button>
 *
 * @example
 * // External link button
 * <Button variant="secondary" href="https://example.com">
 *   Visit Site
 * </Button>
 *
 * @example
 * // Button with icons
 * <Button variant="primary" startIcon={<ChevronLeft />} endIcon={<ChevronRight />}>
 *   Navigate
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  to,
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',
  ariaLabel,
  startIcon,
  endIcon,
}) => {
  // Base button classes (always applied)
  const baseClasses = 'btn';

  // Variant classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline btn-primary',
    ghost: 'btn-ghost',
  };

  // Size classes
  const sizeClasses = {
    sm: 'btn-sm',
    md: '', // Default size
    lg: 'btn-lg',
  };

  // Width classes
  const widthClass = fullWidth ? 'w-full' : '';

  // Combine all classes
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Button content with optional icons
  const buttonContent = (
    <>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </>
  );

  // Render as React Router Link for internal navigation
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }

  // Render as anchor tag for external links
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  // Render as button element
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
