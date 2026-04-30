import { useState } from 'react'
import { MdOutlineNightShelter } from 'react-icons/md'
import { useNavigate } from 'react-router'
import z from 'zod'

import bannerShelterRegister from '@/assets/shelter-register.png'
import { Button } from '@/components/primaryButton/PrimaryButton'
import { shelterService } from '@/services/shelterService'
import type { inputShelter } from '@/types/shelter'
import { AboutShelterSection } from './components/AboutShelterSection'
import { LocationShelter } from './components/LocationSection'

const registerShelterSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  address: z.string().min(3, 'O endereço deve ter pelo menos 3 caracteres'),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
  capacity_max: z.coerce.number(),
})

export const RegisterShelter = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [shelter, setShelter] = useState<inputShelter>({
    name: '',
    address: '',
    latitude: '',
    longitude: '',
    capacity_max: '',
  })

  async function handleRegister(
    event: React.SyntheticEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault()

    const result = registerShelterSchema.safeParse(shelter)

    if (!result.success) {
      const tree = z.treeifyError(result.error)

      setErrors({
        name: tree.properties?.name?.errors?.[0] ?? '',
        address: tree.properties?.address?.errors?.[0] ?? '',
      })

      return
    }

    const dataValidated = result.data
    setErrors({})
    setIsLoading(true)
    try {
      const result = await shelterService.register(dataValidated)
      alert('Abrigo criado com sucesso!')
      navigate('/home')
    } catch (error) {
      console.error(error)
      alert('Erro ao registrar abrigo')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section
        style={{ backgroundImage: `url(${bannerShelterRegister})` }}
        className="relative mx-auto my-6 h-40 w-5/6 overflow-hidden rounded-2xl bg-center bg-cover bg-no-repeat lg:w-2/4"
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-2 left-2 z-10">
          <h2 className="mb-1 font-bold text-2xl text-white">
            Registro de Novo Ponto
          </h2>
          <p className="font-normal text-sm text-white">
            Preencha os dados oficiais para a rede de abrigos.
          </p>
        </div>
      </section>

      <form
        onSubmit={handleRegister}
        method="post"
        className="mb-8 flex flex-col gap-8"
      >
        <div className="lg:3/5 mx-auto w-4/5">
          <AboutShelterSection
            shelter={shelter}
            setShelter={setShelter}
            errors={errors}
          />
        </div>

        <div className="lg:3/5 mx-auto w-4/5">
          <LocationShelter
            shelter={shelter}
            setShelter={setShelter}
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
                <MdOutlineNightShelter />
              </Button.Icon>
              <Button.Label>Criar abrigo</Button.Label>
            </>
          )}
        </Button.Root>
      </form>
    </>
  )
}
