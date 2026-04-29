import type React from 'react'
import { useState } from 'react'
import { z } from 'zod'
import { checkInService } from '@/services/checkIn.services'
import type { checkInInput } from '@/types/checkIn'

const checkInSchema = z.object({
  name: z.string().min(3),
  dateBirth: z.coerce.date(),
})

export function useCheckInForm(shelterId: string) {
  const [checkInInput, setCheckInInput] = useState<checkInInput>({
    name: '',
    dateBirth: '',
  })

  const [onSuccess, setOnSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorsZod, setErrorsZod] = useState<Record<string, string>>({})

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = checkInSchema.safeParse(checkInInput)

    if (!result.success) {
      const tree = z.treeifyError(result.error)

      setErrorsZod({
        name: tree.properties?.name?.errors?.[0] ?? '',
        dateBirth: tree.properties?.dateBirth?.errors?.[0] ?? '',
      })
      setIsLoading(false)
      return
    }

    const dataValidated = result.data
    setErrorsZod({})
    setIsLoading(true)
    try {
      const result = await checkInService.register({
        name: dataValidated.name,
        dateBirth: dataValidated.dateBirth,
        shelterId,
      })
      console.log('🚀 ~ handleRegister ~ result:', result)
      alert('Registrado com sucesso!')
      setOnSuccess(true)
    } catch (error) {
      console.error(error)
      alert('Erro ao registrar pessoa no abrigo')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    checkInInput,
    setCheckInInput,
    handleRegister,
    isLoading,
    errorsZod,
    onSuccess,
  }
}
