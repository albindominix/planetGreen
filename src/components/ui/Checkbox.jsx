import React from 'react'

const Checkbox = ({ 
  checked, 
  onChange, 
  label, 
  id,
  error,
  ...props 
}) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`
            w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded 
            focus:ring-blue-500 focus:ring-2
            ${error ? 'border-red-500' : ''}
          `}
          {...props}
        />
      </div>
      {label && (
        <div className="ml-3 text-sm">
          <label htmlFor={id} className="text-gray-300">
            {label}
          </label>
        </div>
      )}
    </div>
  )
}

export default Checkbox