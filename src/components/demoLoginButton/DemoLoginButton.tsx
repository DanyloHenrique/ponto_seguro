import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useToast } from '@/contexts/ToastContext'
import { authService } from '@/services/authService'
import { getErrorMessage } from '@/utils/getErrorMessage'
import { Button } from '../primaryButton/PrimaryButton'

const DEMO_CREDENTIALS = {
  email: import.meta.env.VITE_DEMO_EMAIL,
  password: import.meta.env.VITE_DEMO_PASSWORD,
}

export function DemoLoginButton() {
  const [isLoading, setIsLoading] = useState(false)
  const { showToast } = useToast()
  const navigate = useNavigate()

  const handleDemoLogin = async () => {
    setIsLoading(true)
    try {
      await authService.login(DEMO_CREDENTIALS.email, DEMO_CREDENTIALS.password)
      navigate('/home')
    } catch (error) {
      showToast(getErrorMessage(error), 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-2 flex flex-col items-center gap-1 border-t pt-2">
      <span className="text-surface">Não quer criar conta?</span>
      <Button.Root
        onClick={handleDemoLogin}
        disabled={isLoading}
        className="w-3/4 border border-black bg-safe-300 text-safe"
      >
        {isLoading ? (
          <Button.Loader />
        ) : (
          <Button.Label>Entrar com conta de teste</Button.Label>
        )}
      </Button.Root>
    </div>
  )
}
