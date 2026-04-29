import { FiUser } from 'react-icons/fi'
import type { checkInList } from '@/types/checkIn'

type RegisteredPersonsProps = {
  checkIns: checkInList[]
}
export default function RegisteredPersons({
  checkIns,
}: RegisteredPersonsProps) {
  return (
    <section className="mb-8 flex w-full flex-col gap-4 rounded-2xl bg-white px-3 py-4 text-left align-center lg:mb-0 lg:h-full lg:w-2/5">
      <div className="px-2 pt-2">
        <h3 className="font-semibold text-sm tracking-widest">
          Pessoas Registradas
        </h3>
      </div>

      <div className="flex h-52 max-h-52 flex-col overflow-y-auto px-2 pr-4">
        {checkIns.length > 0 ? (
          checkIns.map((person) => (
            <div
              key={person.id}
              className="flex items-center justify-between border-gray-100 border-b py-4 last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-alert-200">
                  <FiUser className="text-alert" size={18} strokeWidth={2.5} />
                </div>

                <span className="font-bold text-[17px] text-gray-900 leading-tight">
                  {person.person_name}
                </span>
              </div>

              <span className="font-semibold text-sm text-surface">
                {/* Exemplo de tratamento de hora, ajuste conforme o campo da sua API */}
                {person.created_at
                  ? new Date(person.created_at).toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  : '14:30'}
              </span>
            </div>
          ))
        ) : (
          <p className="py-6 text-center text-sm text-surface-400">
            Nenhuma pessoa encontrada.
          </p>
        )}
      </div>
    </section>
  )
}
