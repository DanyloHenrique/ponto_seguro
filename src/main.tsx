import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { App } from '@/App'
import { ToastContainer } from '@/components/toastContainer/ToastContainer'
import { AuthProvider } from '@/contexts/AuthContext'
import { ToastProvider } from '@/contexts/ToastContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ToastProvider>
        <ToastContainer />
        <App />
      </ToastProvider>
    </AuthProvider>
  </StrictMode>,
)
