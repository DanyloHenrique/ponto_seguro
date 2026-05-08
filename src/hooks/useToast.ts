// import { useCallback, useContext } from 'react'
// import { ToastContext, type ToastType } from '@/contexts/ToastContext'

// // hooks/useToast.ts
// export function useToast() {
//   const toast = useContext(ToastContext)

//   const showToast = useCallback(
//     (message: string, type: ToastType, duration = 500) => {
//       toast?.addToast({
//         id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
//         message,
//         type,
//         duration,
//       })
//     },
//     [toast],
//   )

//   return { showToast }
// }
