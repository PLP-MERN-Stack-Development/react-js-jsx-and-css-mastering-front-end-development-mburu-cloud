import React from 'react';

const Card = ({ children, className = '', ...rest }) => (
  <div className={`bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 md:p-8 transition-all duration-300 ease-in-out hover:shadow-2xl ${className}`} {...rest}>
    {children}
  </div>
);

export default Card;
