import { MdOutlineNightShelter, MdPersonSearch } from 'react-icons/md'
import type { missingPerson } from '@/types/missingPerson'

interface ListMissingPersonsProps {
  missingPersons: missingPerson[]
}
export const ListMissingPersons = ({
  missingPersons,
}: ListMissingPersonsProps) => {
  return (
    <section className="flex w-full flex-col gap-6 rounded-2xl bg-white px-5 py-6 text-left shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
      <h3 className="font-semibold text-xs tracking-widest">Meus Registros</h3>

      <div className="flex w-full overflow-x-auto pb-4">
        {missingPersons.length > 0 ? (
          <div className="flex items-center divide-x divide-gray-100">
            {missingPersons.map((person: missingPerson) => {
              const isFound = person.shelterId != null

              return (
                <div
                  key={person.id}
                  className="flex shrink-0 flex-col items-center gap-3 px-6 first:pl-0 last:pr-0"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=F4F4F5&color=3F3F46&bold=true`}
                      alt={`Foto de ${person.name}`}
                      className="h-10 w-10 rounded-full object-cover"
                    />

                    <span className="w-28 truncate font-bold text-[15px] text-gray-900">
                      {person.name}
                    </span>
                  </div>

                  {isFound ? (
                    <div className="flex w-full items-center justify-center gap-1.5 rounded-full border border-safe-200 bg-safe-100 py-1.5 text-safe-700">
                      <MdOutlineNightShelter size={14} />
                      <span className="font-semibold text-xs">
                        Em um abrigo
                      </span>
                    </div>
                  ) : (
                    <div className="flex w-full items-center justify-center gap-1.5 rounded-full border border-surface-200 bg-surface-100 py-1.5 text-surface-700">
                      <MdPersonSearch size={14} />
                      <span className="font-semibold text-xs">Procurando</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <p className="w-full py-4 text-center text-gray-400 text-sm">
            Você ainda não possui registros.
          </p>
        )}
      </div>

      <div className="mt-2 text-center">
        <button
          type="button"
          className="pointer font-bold text-alert text-sm transition-colors hover:text-alert-700"
        >
          Ver todos os registros
        </button>
      </div>
    </section>
  )
}
