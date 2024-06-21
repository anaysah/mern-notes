// src/components/Input.tsx
import React from 'react';
import inputStyles, { InputVariants } from '../../utils/styles/inputStyles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, InputVariants {
}

const Input: React.FC<InputProps> = ({ className, intent, scale, ...props }) => {
  return (
    <input
      className={inputStyles({ intent, scale, className })}
      {...props}
    />
  );
};

export default Input;
