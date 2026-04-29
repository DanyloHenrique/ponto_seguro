import { LuUserCheck } from 'react-icons/lu'
import { Input } from '@/components/input/Input'
import { Button } from '@/components/primaryButton/PrimaryButton'
import type { checkInInput } from '@/types/checkIn'

type CheckInFormProps = {
  checkInInput: checkInInput
  setCheckInInput: React.Dispatch<React.SetStateAction<checkInInput>>
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  isLoading: boolean
  errorsZod: Record<string, string>
}

export const CheckInForm = ({
  checkInInput,
  setCheckInInput,
  handleSubmit,
  isLoading,
  errorsZod,
}: CheckInFormProps) => {
  return (
    <section className="flex flex-col gap-4 rounded-2xl bg-white px-3 py-4 text-left align-center">
      <h3 className="font-semibold text-sm tracking-widest">
        Registar nova pessoa no abrigo
      </h3>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-4"
      >
        <div>
          <Input.Root>
            <Input.Label htmlFor="person-name">Name: </Input.Label>
            <Input.Control
              id="person-name"
              type="text"
              placeholder="Digite o nome completo"
              required
              value={checkInInput.name}
              onChange={(e) =>
                setCheckInInput({ ...checkInInput, name: e.target.value })
              }
            />
          </Input.Root>
          {errorsZod.name && (
            <span className="text-alert">{errorsZod.name}</span>
          )}
        </div>

        <div>
          <Input.Root>
            <Input.Label htmlFor="person-date-birth">
              Data de nascimento:{' '}
            </Input.Label>
            <Input.Control
              id="person-date-birth"
              type="date"
              placeholder="Digite a data de nascimento"
              required
              value={checkInInput.dateBirth}
              onChange={(e) =>
                setCheckInInput({
                  ...checkInInput,
                  dateBirth: e.target.value,
                })
              }
            />
          </Input.Root>
          {errorsZod.dateBirth && (
            <span className="text-alert">{errorsZod.dateBirth}</span>
          )}
        </div>

        <Button.Root type="submit" disabled={isLoading}>
          {isLoading ? (
            <Button.Loader />
          ) : (
            <>
              <Button.Icon>
                <LuUserCheck className="mt-1" />
              </Button.Icon>
              <Button.Label>Registrar Chegada</Button.Label>
            </>
          )}
        </Button.Root>
      </form>
    </section>
  )
}
