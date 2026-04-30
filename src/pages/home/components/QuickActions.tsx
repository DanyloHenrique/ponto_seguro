import { IoMdPersonAdd } from 'react-icons/io'
import { MdPersonSearch } from 'react-icons/md'
import { Link } from 'react-router'

export const QuickAction = () => {
  return (
    <section className="flex w-full flex-col gap-4">
      <h3 className="px-1 font-semibold text-sm text-surface-500 tracking-widest">
        Ações Rápidas
      </h3>

      <div className="flex flex-col gap-3">
        <Link
          to={'/pessoa-desaparecida'}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-alert py-4 text-white transition-colors hover:bg-alert-700"
        >
          <IoMdPersonAdd size={22} />
          <span className="font-medium text-[17px]">
            Registrar Desaparecido
          </span>
        </Link>

        <Link
          to={'/abrigos-proximos'}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-800 bg-white py-4 text-gray-900 transition-colors hover:bg-gray-50"
        >
          <MdPersonSearch size={22} />
          <span className="font-medium text-[17px]">
            Buscar Abrigos Próximos
          </span>
        </Link>
      </div>
    </section>
  )
}
