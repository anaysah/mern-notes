// src/utils/inputStyles.ts
import { cva, VariantProps } from 'class-variance-authority';

const inputStyles = cva(
  'bg-transparent w-full border rounded-lg focus:outline-none focus:ring', {
  variants: {
    intent: {
      default: 'border-divider focus:border-blue-300',
      error: 'border-red-500 focus:border-red-700',
      success: 'border-green-500 focus:border-green-700',
      normal: 'focus:ring-0 rounded-none border-none'
    },
    scale: {
      small: 'p-2 text-sm',
      medium: 'p-3 text-base',
      large: 'p-4 text-lg',
    },
  },
  defaultVariants: {
    intent: 'default',
    scale: 'medium',
  },
});

export type InputVariants = VariantProps<typeof inputStyles>;
export default inputStyles;
