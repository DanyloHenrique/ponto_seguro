import React, {
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
} from 'react'

export type ToastType = 'success' | 'error' | 'info'
export interface Toast {
  id: string
  message: string
  type: ToastType
  duration?: number
}
interface ToastContextProps {
  toastList: Toast[]
  addToast: (toast: Toast) => void
  removeToast: (id: string) => void
  CustomComponent?: React.ElementType
}

export const ToastContext = React.createContext<ToastContextProps | null>(null)

interface ToastProviderProps {
  children: ReactNode
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used within a ToastProvider')

  const { addToast, toastList, removeToast } = context

  const showToast = useCallback(
    (message: string, type: ToastType, duration = 3000) => {
      addToast({
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        message,
        type,
        duration,
      })
    },
    [addToast],
  )

  return { toastList, addToast, removeToast, showToast }
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toastList, setToastList] = React.useState<Toast[]>([])

  const addToast = (toast: Toast) => {
    console.log('in add new toast: ', toast)
    setToastList((prevState) => [...prevState, toast])
  }

  const removeToast = useCallback((id: string) => {
    setToastList((prevState) => prevState.filter((toast) => toast.id !== id))
  }, [])

  useEffect(() => {
    const timeoutIds = toastList
      .filter((toast) => toast.duration)
      .map((toast) => {
        return setTimeout(() => {
          removeToast(toast.id)
        }, toast.duration)
      })

    return () => {
      timeoutIds.forEach(clearTimeout)
    }
  }, [toastList, removeToast])

  return (
    <ToastContext.Provider value={{ toastList, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}
