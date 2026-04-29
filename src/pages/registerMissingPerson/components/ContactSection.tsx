import { useMask } from '@react-input/mask'
import { Input } from '@/components/input/Input'
import type { inputMissingPerson } from '@/types/missingPerson'

type ContactSectionProps = {
  errors: Record<string, string>
  missingPerson: inputMissingPerson
  setMissingPerson: React.Dispatch<React.SetStateAction<inputMissingPerson>>
}

export const ContactSection = ({
  missingPerson,
  setMissingPerson,
  errors,
}: ContactSectionProps) => {
  const phoneInputRef = useMask({
    mask: '(__) _____-____',
    replacement: { _: /\d/ },
  })

  return (
    <>
      <h3 className="mb-2 font-semibold text-lg">Seção 2 - Seu contato</h3>
      <section className="flex flex-col gap-4 rounded-2xl bg-white px-3 py-4 text-left align-center">
        <div>
          <Input.Root>
            <Input.Label htmlFor="user-name">
              Nome de quem registra:
            </Input.Label>
            <Input.Control
              id="user-name"
              type="text"
              placeholder="Nome Sobrenome"
              required
              value={missingPerson.contactName}
              onChange={(e) =>
                setMissingPerson({
                  ...missingPerson,
                  contactName: e.target.value,
                })
              }
            />
          </Input.Root>
          {errors.contactName && (
            <span className="text-alert">{errors.contactName}</span>
          )}
        </div>

        <div>
          <Input.Root>
            <Input.Label htmlFor="user-phone">Telefone de contato:</Input.Label>
            <Input.Control
              id="user-phone"
              type="text"
              placeholder="(00) 00000-0000"
              ref={phoneInputRef}
              required
              value={missingPerson.contactPhone}
              onChange={(e) =>
                setMissingPerson({
                  ...missingPerson,
                  contactPhone: e.target.value,
                })
              }
            />
          </Input.Root>
          {errors.contactPhone && (
            <span className="text-alert">{errors.contactPhone}</span>
          )}
        </div>
      </section>
    </>
  )
}
