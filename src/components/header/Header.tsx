import { BsPersonCircle } from 'react-icons/bs'
import { MdMenu } from 'react-icons/md'
import { useMatches } from 'react-router'

type RouteHandle = {
  title?: string
}

export const Header = () => {
  const matches = useMatches()
  const currentRoute = matches[matches.length - 1]
  const handle = currentRoute.handle as RouteHandle
  const title = handle.title || 'Página'

  return (
    <header className="flex w-full items-center justify-between bg-white px-6 py-4">
      <div className="flex items-center gap-4">
        <button type="button" aria-label="Abrir menu">
          <MdMenu size={24} />
        </button>
        <strong className="font-bold text-lg tracking-tight">{title}</strong>
      </div>

      <button type="button" aria-label="Perfil do usuário">
        <BsPersonCircle size={24} />
      </button>
    </header>
  )
}
