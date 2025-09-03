import React from 'react'

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

const variantClasses = {
  solid: 'bg-white text-slate-900 border border-white/80 hover:bg-white/90',
  outline: 'bg-transparent text-white border border-white hover:bg-white/10',
  ghost: 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
}

/**
 * WhiteButtons
 * Reusable white button with Tailwind variants and sizes.
 */
const WhiteButtons = ({
  children,
  onClick,
  type = 'button',
  size = 'md',
  variant = 'solid',
  className = '',
  disabled = false,
  ariaLabel
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm';
  const classes = [
    baseClasses,
    sizeClasses[size] || sizeClasses.md,
    variantClasses[variant] || variantClasses.solid,
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default WhiteButtons
