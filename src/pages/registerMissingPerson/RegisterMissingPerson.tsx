import { useState } from 'react'
import { MdOutlinePersonSearch } from 'react-icons/md'
import z from 'zod'
import { Button } from '@/components/primaryButton/PrimaryButton'
import { AboutPersonSection } from '@/pages/registerMissingPerson/components/AboutPersonSection'
import { ContactSection } from '@/pages/registerMissingPerson/components/ContactSection'
import { missingPersonService } from '@/services/missingPersonService'
import type { inputMissingPerson } from '@/types/missingPerson'

const registerMissingPersonSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  dateBirth: z.coerce.date(),
  lastSeenLocation: z.string(),
  contactName: z.string(),
  contactPhone: z
    .string()
    .min(14, 'Telefone incompleto')
    .transform((val) => val.replace(/\D/g, '')),
  physicalDescription: z.string().optional(),
  clothesDescription: z.string().optional(),
})

export const RegisterMissingPerson = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [missingPerson, setMissingPerson] = useState<inputMissingPerson>({
    name: '',
    dateBirth: '',
    lastSeenLocation: '',
    contactName: '',
    contactPhone: '',
    physicalDescription: '',
    clothesDescription: '',
  })

  async function handleRegister(
    event: React.SyntheticEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault()

    const result = registerMissingPersonSchema.safeParse(missingPerson)

    if (!result.success) {
      const tree = z.treeifyError(result.error)

      setErrors({
        name: tree.properties?.name?.errors?.[0] ?? '',
        dateBirth: tree.properties?.dateBirth?.errors?.[0] ?? '',
        contactName: tree.properties?.contactName?.errors?.[0] ?? '',
        contactPhone: tree.properties?.contactPhone?.errors?.[0] ?? '',
      })

      return
    }

    const dataValidated = result.data
    setErrors({})
    setIsLoading(true)
    try {
      const result = await missingPersonService.register(dataValidated)
      console.log('🚀 ~ handleRegister ~ result:', result)
      console.log('')
    } catch (error) {
      console.error(error)
      alert('Erro ao registrar pessoa')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section className="mx-auto my-6 w-5/6 rounded-2xl bg-white px-3 py-4 text-center align-center lg:w-2/4">
        <h2 className="mb-2 font-bold text-2xl">
          Registrar Pessoa Desaparecida
        </h2>
        <p className="text-sm/relaxed text-surface">
          Preencha com o máximo de detalhes que conseguir lembrar. Suas
          informações serão cruzadas com a nossa rede de abrigos em tempo real.
          Avisaremos você imediatamente caso a pessoa seja cadastrada em algum
          local seguro.
        </p>
      </section>

      <form
        onSubmit={handleRegister}
        method="post"
        className="mb-8 flex flex-col gap-8"
      >
        <div className="lg:3/5 mx-auto w-4/5">
          <AboutPersonSection
            missingPerson={missingPerson}
            setMissingPerson={setMissingPerson}
            errors={errors}
          />
        </div>

        <div className="lg:3/5 mx-auto w-4/5">
          <ContactSection
            missingPerson={missingPerson}
            setMissingPerson={setMissingPerson}
            errors={errors}
          />
        </div>

        <Button.Root
          type="submit"
          disabled={false}
          className='className="lg:3/5 mx-auto w-4/5'
        >
          {isLoading ? (
            <Button.Loader />
          ) : (
            <>
              <Button.Icon>
                <MdOutlinePersonSearch className="mt-1" />
              </Button.Icon>
              <Button.Label>Registrar desaparecimento</Button.Label>
            </>
          )}
        </Button.Root>
      </form>
    </>
  )
}
