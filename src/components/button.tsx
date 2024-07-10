import type { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const buttonVarients = tv({
  base: 'rounded-lg px-5 font-medium flex items-center justify-center gap-2 transition-all',

  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-100  hover:bg-zinc-700',
    },

    size: {
      default: 'py-2 ml-5',
      full: 'w-full h-11',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVarients> {
  children: ReactNode
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVarients({ variant, size })}>
      {children}
    </button>
  )
}