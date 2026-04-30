import { FiArrowLeft } from 'react-icons/fi'
import { useMatches, useNavigate } from 'react-router'

// import { BsPersonCircle } from 'react-icons/bs'
export const Header = () => {
  const navigate = useNavigate()
  const matches = useMatches()

  const currentRoute = matches.at(-1)
  if (!currentRoute) return null

  const handle = currentRoute.handle as { title?: string }

  const title = handle?.title ?? 'Página'
  const isHome = currentRoute.pathname === '/home'

  const handleLogout = () => {
    localStorage.removeItem('@pontoSeguro:token')
    navigate('/login')
  }

  return (
    <header className="flex w-full items-center justify-between bg-white px-6 py-4">
      <div className="flex items-center gap-4">
        {!isHome && (
          <button
            type="button"
            aria-label="Voltar página"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft size={18} className="mt-1" />
          </button>
        )}

        <strong className="font-bold text-lg tracking-tight">{title}</strong>
      </div>

      {isHome && (
        <button
          type="button"
          aria-label="Sair da conta"
          onClick={handleLogout}
          className="rounded bg-alert px-3 py-1 text-sm text-white"
        >
          Sair
        </button>
      )}
    </header>
  )
}
