import { Input } from '@/components/input/Input'
import type { inputShelter } from '@/types/shelter'


type AboutShelterSectionProps = {
  errors: Record<string, string>
  shelter: inputShelter
  setShelter: React.Dispatch<React.SetStateAction<inputShelter>>
}

export const AboutShelterSection = ({
  shelter,
  setShelter,
  errors,
}: AboutShelterSectionProps) => {
  return (
    <>
      <h3 className="mb-2 font-semibold text-lg">
        Seção 1 - Informações do abrigo
      </h3>
      <section className="flex flex-col gap-4 rounded-2xl bg-white px-3 py-4 text-left align-center">
        <div>
          <Input.Root>
            <Input.Label htmlFor="shelter-name">Nome do abrigo:</Input.Label>
            <Input.Control
              id="shelter-name"
              type="text"
              placeholder="Insira o nome completo"
              required
              value={shelter.name}
              onChange={(e) =>
                setShelter({
                  ...shelter,
                  name: e.target.value,
                })
              }
            />
          </Input.Root>
          {errors.name && <span className="text-alert">{errors.name}</span>}
        </div>

        <div>
          <Input.Root>
            <Input.Label htmlFor="shelter-capacity-max">
              Capacidade máxima:
            </Input.Label>
            <Input.Control
              id="shelter-capacity-max"
              type="number"
              placeholder="quantidade máxima de pessoas"
              required
              value={shelter.capacity_max}
              onChange={(e) =>
                setShelter({
                  ...shelter,
                  capacity_max: e.target.value,
                })
              }
            />
          </Input.Root>
          {errors.capacity_max && (
            <span className="text-alert">{errors.capacity_max}</span>
          )}
        </div>
      </section>
    </>
  )
}
