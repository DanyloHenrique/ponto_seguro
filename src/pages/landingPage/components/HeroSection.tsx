import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router'

export const HeroSection = () => {
  return (
    <header className="mx-auto mt-20 flex max-w-4xl flex-col items-center text-center md:mt-32">
      <span className="mb-6 rounded-full bg-safe-400 px-4 py-1 font-bold text-surface-900 text-xs uppercase tracking-widest">
        Plataforma de Emergência Climática
      </span>

      <h1 className="mb-6 font-black text-4xl text-surface-900 leading-tight md:text-6xl">
        Conectando pessoas à segurança quando mais importa
      </h1>

      <p className="mb-10 max-w-2xl font-medium text-lg text-surface-600">
        Encontre abrigos próximos, registre desaparecidos e coordene resgates em
        tempo real.
      </p>

      <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
        <Link
          to={'/abrigos-proximos'}
          className="flex items-center justify-center gap-2 rounded-xl bg-safe-400 px-8 py-4 font-bold text-surface-900 transition-colors hover:bg-safe-500"
        >
          <CiSearch size={20} strokeWidth={2.5} />
          Encontrar Abrigos Próximos
        </Link>
        <Link
          to={'/criar-conta'}
          className="rounded-xl bg-alert-500 px-8 py-4 font-bold text-white transition-colors hover:bg-alert-600"
        >
          Cadastrar agora
        </Link>
      </div>

      <span className="mt-6 text-sm text-surface-500">
        Acesso gratuito · Sem necessidade de cadastro para buscar abrigos
      </span>
    </header>
  )
}
