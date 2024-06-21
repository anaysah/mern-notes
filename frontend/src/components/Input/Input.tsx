// src/components/Input.tsx
import React from 'react';
import inputStyles, { InputVariants } from '../../utils/styles/inputStyles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, InputVariants {
  
}

const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>
(({ className, intent, scale, ...props }, ref) => {
  return (
    <input
      className={inputStyles({ intent, scale, className })}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
