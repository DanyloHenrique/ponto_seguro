import type React from 'react'
import { useState } from 'react'
import { z } from 'zod'
import { useToast } from '@/contexts/ToastContext'
import { checkInService } from '@/services/checkIn.services'
import type { checkInInput } from '@/types/checkIn'
import { getErrorMessage } from '@/utils/getErrorMessage'

const checkInSchema = z.object({
  name: z.string().min(3),
  dateBirth: z.coerce.date(),
  cpf: z
    .string()
    .optional()
    .transform((val) => (val ? val.replace(/\D/g, '') : undefined))
    .refine((val) => !val || val.length === 11, { message: 'CPF Inválido' }),
})

export function useCheckInForm(shelterId: string) {
  const { showToast } = useToast()
  const [checkInInput, setCheckInInput] = useState<checkInInput>({
    name: '',
    dateBirth: '',
    cpf: '',
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
        cpf: tree.properties?.cpf?.errors?.[0] ?? '',
      })
      setIsLoading(false)
      return
    }

    const dataValidated = result.data
    setErrorsZod({})
    setIsLoading(true)
    try {
      await checkInService.register({
        name: dataValidated.name,
        dateBirth: dataValidated.dateBirth,
        cpf: dataValidated.cpf,
        shelterId,
      })
      showToast('Registrado com sucesso!', 'success')
      setOnSuccess(true)
    } catch (error) {
      showToast(getErrorMessage(error), 'error')
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
