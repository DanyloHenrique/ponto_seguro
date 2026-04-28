import type { ComponentProps, ReactNode } from 'react'

type ButtonRootProps = ComponentProps<'button'> & {
  children: ReactNode
}

const ButtonRoot = ({ children, className, ...props }: ButtonRootProps) => {
  return (
    <button
      {...props}
      className={`flex items-center justify-center gap-2 rounded-md bg-safe px-4 py-2 transition-all duration-200 hover:brightness-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${className}
      `}
    >
      {children}
    </button>
  )
}

type ButtonIconProps = {
  children: ReactNode
}

const ButtonIcon = ({ children }: ButtonIconProps) => {
  return (
    <span className="flex h-5 w-5 items-center justify-center">{children}</span>
  )
}

type ButtonLabelProps = {
  children: ReactNode
}

const ButtonLabel = ({ children }: ButtonLabelProps) => {
  return <span className="text-black">{children}</span>
}

const ButtonLoader = () => {
  return (
    <span
      className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
      aria-hidden="true"
    />
  )
}

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Label: ButtonLabel,
  Loader: ButtonLoader,
}
