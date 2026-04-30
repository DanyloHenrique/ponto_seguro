import { Link } from 'react-router'

export const NavBar = () => {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between">
      <div className="font-black text-surface-900 text-xl tracking-tight">
        Ponto Seguro
      </div>

      <div className="flex items-center gap-6 font-bold text-sm">
        <Link
          to={'/login'}
          className="rounded-lg border border-safe-700 px-5 py-2.5 text-surface-700 transition-colors hover:bg-safe-100 hover:text-surface-900"
        >
          Acessar
        </Link>
        <Link
          to={'/criar-conta'}
          className="rounded-lg bg-alert-500 px-5 py-2.5 text-white transition-colors hover:bg-alert-600"
        >
          Criar Conta
        </Link>
      </div>
    </nav>
  )
}
