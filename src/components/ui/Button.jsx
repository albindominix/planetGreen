import { ArrowRight } from 'lucide-react'

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  loading = false,
  showArrow = false,
  onClick,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100 focus:ring-white disabled:bg-gray-300 disabled:text-gray-500',
    secondary: 'bg-transparent text-white border border-gray-600 hover:bg-gray-800 hover:text-white focus:ring-gray-500 disabled:bg-gray-700 disabled:border-gray-600',
    ghost: 'bg-transparent text-gray-400 hover:text-white focus:ring-gray-500',
    dark: 'bg-[#141414]  text-white hover:bg-gray-700  focus:ring-gray-500',

  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled || loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
    ${className}
  `.trim()

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {loading ? (
        <>
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </>
      ) : (
        <>
          {children}
          {showArrow && <ArrowRight className="h-4 w-4" />}
        </>
      )}
    </button>
  )
}

export default Button