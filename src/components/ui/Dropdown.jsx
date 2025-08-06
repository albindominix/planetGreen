import React, { useState, useRef, useEffect } from 'react'

const Dropdown = ({ 
  trigger, 
  children, 
  className = '',
  align = 'right',
  width = 'w-48',
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close dropdown when pressing Escape key
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  const alignmentClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2'
  }

  return (
    <div className="relative" ref={dropdownRef} {...props}>
      {/* Trigger */}
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`
          absolute mt-2 bg-white rounded-lg shadow-lg border border-gray-300 py-1 z-50 p-2 
          ${width}
          ${alignmentClasses[align]}
          ${className}
        `}>
          {React.Children.map(children, child => 
            React.cloneElement(child, { closeDropdown: () => setIsOpen(false) })
          )}
        </div>
      )}
    </div>
  )
}

const DropdownHeader = ({ children, className = '' }) => (
  <div className={`px-4 py-3 border-b border-gray-100 ${className}`}>
    {children}
  </div>
)

const DropdownItem = ({ 
  children, 
  onClick, 
  disabled = false, 
  className = '',
  closeDropdown,
  ...props 
}) => {
  const handleClick = (e) => {
    if (disabled) return
    if (onClick) onClick(e)
    if (closeDropdown) closeDropdown()
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        flex w-full items-center px-4 py-2 text-sm text-left transition-colors duration-150
        ${disabled 
          ? 'text-gray-400 cursor-not-allowed' 
          : 'text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

const DropdownDivider = ({ className = '' }) => (
  <div className={`border-t border-gray-100 my-1 ${className}`} />
)

export { Dropdown, DropdownHeader, DropdownItem, DropdownDivider }
export default Dropdown