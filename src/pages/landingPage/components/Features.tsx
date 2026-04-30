import { GoHome } from 'react-icons/go'
import { MdPersonSearch } from 'react-icons/md'
import { RiFocus2Line } from 'react-icons/ri'

export const Features = () => {
  return (
    <section
      id="como-funciona"
      className="mx-auto mt-12 max-w-7xl pb-6 text-left lg:pb-24"
    >
      <h3 className="mb-2 font-semibold text-surface-500 text-xs uppercase tracking-widest">
        Como Funciona
      </h3>
      <h2 className="mb-12 font-bold text-3xl text-surface-900 md:text-4xl">
        Simples e rápido em momentos de crise
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-4 rounded-2xl border-2 border-white bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-safe-700">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-safe-100 text-safe-600">
            <GoHome size={24} />
          </div>
          <h3 className="font-bold text-surface-900 text-xl">
            Encontre um abrigo
          </h3>
          <p className="text-base text-surface-600 leading-relaxed">
            Veja abrigos disponíveis perto de você com vagas em tempo real.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border-2 border-white bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-safe-700">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-alert-100 text-alert-600">
            <MdPersonSearch size={24} />
          </div>
          <h3 className="font-bold text-surface-900 text-xl">
            Registre um desaparecido
          </h3>
          <p className="text-base text-surface-600 leading-relaxed">
            Cadastre informações de quem você perdeu contato durante o desastre.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border-2 border-white bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-safe-700">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-safe-100 text-safe-600">
            <RiFocus2Line size={24} />
          </div>
          <h3 className="font-bold text-surface-900 text-xl">
            Sistema de Match
          </h3>
          <p className="text-base text-surface-600 leading-relaxed">
            Nossa plataforma cruza dados e conecta famílias a pessoas
            encontradas nos abrigos.
          </p>
        </div>
      </div>
    </section>
  )
}
