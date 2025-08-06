import React, { useState } from 'react';

const Avatar = ({ className = "", children, ...props }) => {
  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full ${className}`} {...props}>
      {children}
    </div>
  );
};

const AvatarImage = ({ src, alt = "Avatar", className = "", onError, ...props }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  if (hasError) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover  ${className}`}
      onError={handleError}
      {...props}
    />
  );
};

const AvatarFallback = ({ children, className = "", ...props }) => {
  return (
    <div className={`flex items-center justify-center w-full h-full bg-gray-200 text-gray-600 font-medium text-sm rounded-xl ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Avatar, AvatarImage, AvatarFallback };