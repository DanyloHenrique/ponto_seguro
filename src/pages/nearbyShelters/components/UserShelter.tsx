import { MdOutlineChevronRight } from 'react-icons/md'
import { Link } from 'react-router'

interface UserShelterProps {
  nameShelter: string
  capacity_current: number
  capacity_max: number
  shelterId: string
}

export const UserShelter = ({
  nameShelter,
  capacity_current,
  capacity_max,
  shelterId,
}: UserShelterProps) => {
  const percentage = Math.min((capacity_current / capacity_max) * 100, 100)

  return (
    <Link
      to={`abrigo/${shelterId}`}
      className="flex w-full cursor-pointer flex-col gap-4 rounded-2xl border-safe border-l-[6px] bg-white p-6 text-left shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-md"
    >
      <div className="flex flex-col">
        <h3 className="font-semibold text-surface-500 text-xs tracking-widest">
          Seu Abrigo
        </h3>

        {/* Título e Ícone */}
        <div className="mt-2 flex items-center justify-between">
          <h2 className="pr-4 font-bold text-surface-900 text-xl leading-tight">
            {nameShelter}
          </h2>
          <MdOutlineChevronRight
            className="shrink-0 text-surface-400"
            size={24}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-100">
          <div
            className="h-full rounded-full bg-safe transition-all duration-500 ease-in-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="font-medium text-sm text-surface-600">
          {capacity_current} / {capacity_max} pessoas
        </p>
      </div>
    </Link>
  )
}
