import type { ComponentProps, ReactNode } from 'react'

// Root: O container que agrupa label e input
type InputRootProps = {
  children: ReactNode
  error?: string
}

const InputRoot = ({ children, error }: InputRootProps) => {
  return (
    <div className="flex w-full flex-col gap-1.5">
      {children}
      {error && (
        <span className="font-medium text-red-500 text-xs">{error}</span>
      )}
    </div>
  )
}

// Label: O título do campo
type InputLabelProps = ComponentProps<'label'>

const InputLabel = (props: InputLabelProps) => {
  return (
    <label
      {...props}
      className="font-semibold text-slate-700 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    />
  )
}

// Control: O campo de texto em si
type InputControlProps = ComponentProps<'input'>

const InputControl = (props: InputControlProps) => {
  return (
    <input
      {...props}
      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safe focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  )
}

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Control: InputControl,
}
