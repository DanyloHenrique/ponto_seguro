import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { BarProgress } from '@/components/barProgress/BarProgress'
import { shelterService } from '@/services/shelterService'
import type { shelter } from '@/types/shelter'

import { CheckInForm } from './components/CheckInForm'
import RegisteredPersons from './components/RegisteredPersons'
import { useCheckInForm } from './hooks/useCheckIn'

export const Shelter = () => {
  const { id } = useParams()
  const {
    isLoading,
    handleRegister,
    checkInInput,
    errorsZod,
    setCheckInInput,
    onSuccess,
  } = useCheckInForm(id ?? '')
  const [shelter, setShelter] = useState<shelter | null>(null)
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!id) return
    const fetchShelter = async () => {
      console.log('in useEffect')
      try {
        const response = await shelterService.fetchById(id)
        setShelter(response)
      } catch (error) {
        console.error(error)
      } finally {
        setIsInitialLoading(false)
      }
    }
    fetchShelter()
  }, [id, onSuccess])

  const isCrowded = shelter
    ? shelter.capacity_current >= shelter.capacity_max
    : false

  if (!id) return null
  if (isInitialLoading || !shelter) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-gray-500">
        Carregando informações do abrigo...
      </div>
    )
  }

  const percentage = Math.min(
    (shelter.capacity_current / shelter.capacity_max) * 100,
    100,
  )

  return (
    <>
      <section className="mx-4 my-6 lg:mx-12">
        <h2 className="font-bold text-2xl lg:text-3xl">{shelter.name}</h2>
        <p>{shelter.address}</p>
      </section>

      <div className="mx-auto flex w-9/10 flex-col gap-4 pb-8 lg:h-4/5 lg:flex-row">
        <div className="flex flex-col gap-4 lg:h-4/5 lg:w-3/5 lg:gap-8">
          <section className="flex flex-col gap-4 rounded-2xl bg-white px-3 py-4 text-left align-center">
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <p className="text-2xl text-bold">
                  {shelter.capacity_current}/{shelter.capacity_max}
                </p>{' '}
                Pessoas no abrigo
              </div>
              {isCrowded ? (
                <span className="rounded-full border border-red-200 bg-red-100 px-3 py-1 font-medium text-red-700 text-sm">
                  Lotado
                </span>
              ) : (
                <span className="rounded-full border border-safe-200 bg-safe-100 px-3 py-1 font-medium text-safe-700 text-sm">
                  Disponível
                </span>
              )}
            </div>
            <BarProgress percentage={percentage} />
            <p>{percentage.toFixed(0)}% da capacidade máxima</p>
          </section>

          <CheckInForm
            checkInInput={checkInInput}
            setCheckInInput={setCheckInInput}
            handleSubmit={handleRegister}
            isLoading={isLoading}
            errorsZod={errorsZod}
          />
        </div>

        <RegisteredPersons checkIns={shelter.checkIns} />
      </div>
    </>
  )
}
