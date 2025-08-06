import React from 'react'
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react'

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  onBlur,
  error,
  showPasswordToggle = false,
  showPassword = false,
  onTogglePassword,
  icon,
  ...props 
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'email':
        return <Mail className="h-5 w-5 text-gray-400" />
      case 'password':
        return <Lock className="h-5 w-5 text-gray-400" />
      case 'user':
        return <User className="h-5 w-5 text-gray-400" />
      default:
        return null
    }
  }

  return (
    <div className="relative">
      {/* Icon */}
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {getIcon()}
        </div>
      )}
      
      {/* Input */}
      <input
        type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`
          block w-full px-4 py-3 bg-[#1f1f1f] border border-gray-700 rounded-lg
          text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${icon ? 'pl-10' : ''}
          ${showPasswordToggle ? 'pr-10' : ''}
        `}
        {...props}
      />
      
      {/* Password Toggle */}
      {showPasswordToggle && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={onTogglePassword}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
          ) : (
            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
          )}
        </button>
      )}
    </div>
  )
}

export default Input