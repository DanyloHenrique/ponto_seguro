import { Input } from '@/components/input/Input'
import type { inputMissingPerson } from '@/types/missingPerson'

type AboutPersonSectionProps = {
  errors: Record<string, string>
  missingPerson: inputMissingPerson
  setMissingPerson: React.Dispatch<React.SetStateAction<inputMissingPerson>>
}

export const AboutPersonSection = ({
  missingPerson,
  setMissingPerson,
  errors,
}: AboutPersonSectionProps) => {
  return (
    <>
      <h3 className="mb-2 font-semibold text-lg">Seção 1 - Sobre a pessoa</h3>
      <section className="flex flex-col gap-4 rounded-2xl bg-white px-3 py-4 text-left align-center">
        <div>
          <Input.Root>
            <Input.Label htmlFor="missing-person-name">
              Nome completo:
            </Input.Label>
            <Input.Control
              id="missing-person-name"
              type="text"
              placeholder="Insira o nome completo"
              required
              value={missingPerson.name}
              onChange={(e) =>
                setMissingPerson({
                  ...missingPerson,
                  name: e.target.value,
                })
              }
            />
          </Input.Root>
          {errors.name && <span className="text-alert">{errors.name}</span>}
        </div>

        <div>
          <Input.Root>
            <Input.Label htmlFor="missing-person-date-birth">
              Data de nascimento:
            </Input.Label>
            <Input.Control
              id="missing-person-date-birth"
              type="date"
              placeholder="dd/mm/aaaa"
              required
              value={missingPerson.dateBirth}
              onChange={(e) =>
                setMissingPerson({
                  ...missingPerson,
                  dateBirth: e.target.value,
                })
              }
            />
          </Input.Root>
          {errors.dateBirth && (
            <span className="text-alert">{errors.dateBirth}</span>
          )}
        </div>

        <div>
          <Input.Root>
            <Input.Label htmlFor="missing-person-last-seen-location">
              Último local visto:
            </Input.Label>
            <Input.Control
              id="missing-person-last-seen-location"
              type="string"
              placeholder="Região onde a pessoa foi vista"
              required
              value={missingPerson.lastSeenLocation}
              onChange={(e) =>
                setMissingPerson({
                  ...missingPerson,
                  lastSeenLocation: e.target.value,
                })
              }
            />
          </Input.Root>
        </div>

        <div>
          <Input.Root>
            <Input.Label htmlFor="missing-person-physical-description">
              Descrição física:{'  '}
              <span className="text-gray-400 text-sm">(opcional)</span>
            </Input.Label>
            <Input.Control
              id="missing-person-physical-description"
              type="text"
              placeholder="Altura aproximada, cor dos olhos, cabelo e marcas particulares"
              value={missingPerson.physicalDescription}
              onChange={(e) =>
                setMissingPerson({
                  ...missingPerson,
                  physicalDescription: e.target.value,
                })
              }
            />
          </Input.Root>
        </div>

        <div>
          <Input.Root>
            <Input.Label htmlFor="missing-person-clothes-description">
              Roupas que estava usando:{'  '}
              <span className="text-gray-400 text-sm">(opcional)</span>
            </Input.Label>
            <Input.Control
              id="missing-person-clothes-description"
              type="text"
              placeholder="Descreva as vestimentas e acessórios"
              value={missingPerson.clothesDescription}
              onChange={(e) =>
                setMissingPerson({
                  ...missingPerson,
                  clothesDescription: e.target.value,
                })
              }
            />
          </Input.Root>
        </div>
      </section>
    </>
  )
}
