import { useEffect, useState } from 'react'
import { type Toast, useToast } from '@/contexts/ToastContext'

type ToastItemProps = {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
  onRemove: (id: string) => void
}

const styles = {
  success: 'bg-safe-100 border-safe-700 text-safe-700 [&_span]:text-safe-700',
  error: 'bg-alert-100 border-alert-700 text-alert-700 [&_span]:text-alert-700',
  info: 'bg-surface-100 border-ink-700 text-ink-700 [&_span]:text-ink-700',
}

function ToastItem({ id, message, type, onRemove }: ToastItemProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // entra com animação
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [])

  const handleRemove = () => {
    setVisible(false)
    setTimeout(() => onRemove(id), 300)
  }

  return (
    <div
      className={`flex w-80 items-start gap-3 rounded-lg border px-4 py-3 text-sm shadow-lg transition-all duration-300 ${styles[type]}
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
      `}
    >
      <p className="flex-1 leading-snug">{message}</p>
      <button
        type="button"
        onClick={handleRemove}
        className="shrink-0 cursor-pointer opacity-50 transition-opacity hover:opacity-100"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
    </div>
  )
}

export function ToastContainer() {
  const { toastList, removeToast } = useToast()

  return (
    <div
      className="fixed right-4 bottom-4 z-50 flex flex-col gap-2"
      id="toast-container"
    >
      {toastList.map((toast: Toast) => (
        <ToastItem
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          onRemove={removeToast}
        />
      ))}
    </div>
  )
}
