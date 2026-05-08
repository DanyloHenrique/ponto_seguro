import { useEffect, useState } from 'react'
import { MdOutlineNightShelter } from 'react-icons/md'
import { Link } from 'react-router'
import { useToast } from '@/contexts/ToastContext'
// import { type ToastType, useToast } from '@/contexts/ToastContext'
import { UserShelter } from '@/pages/nearbyShelters/components/UserShelter'
import { missingPersonService } from '@/services/missingPersonService'
import { shelterService } from '@/services/shelterService'
import type { missingPerson } from '@/types/missingPerson'
import type { shelterUser } from '@/types/shelter'
import { CriticalAlerts } from './components/CriticalAlerts'
import { ListMissingPersons } from './components/ListMissingPersons'
import { QuickAction } from './components/QuickActions'
import { getErrorMessage } from '@/utils/getErrorMessage'

export const Home = () => {
  const { showToast } = useToast()
  const [missingPersons, setMissingPersons] = useState<missingPerson[]>([])
  const [shelters, setShelters] = useState<shelterUser[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [missingPersons, shelters] = await Promise.all([
          missingPersonService.fetchByUserId(),
          shelterService.fetchByUserId(),
        ])
        setMissingPersons(missingPersons)
        setShelters(shelters)
      } catch (error) {
        showToast(getErrorMessage(error), 'error')
      }
    }
  
    fetchData()
  }, [])

  return (
    <div className="mx-10 my-8 flex flex-col gap-6">
      <section className="flex flex-col gap-1 px-1">
        <h1 className="font-black text-3xl text-surface-900 md:text-4xl">
          Bem vindo!
        </h1>
        <p className="text-base text-surface-600 md:text-lg">
          Aqui está o resumo de hoje
        </p>
      </section>

      <div className="flex flex-col gap-2">
        {shelters.length > 0 ? (
          shelters.map((shelter) => (
            <UserShelter
              key={shelter.id}
              nameShelter={shelter.name}
              capacity_current={shelter.capacity_current}
              capacity_max={shelter.capacity_max}
              shelterId={shelter.id}
            />
          ))
        ) : (
          <Link
            to={'/cadastrar-abrigo'}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-safe py-4 text-black transition-colors hover:bg-safe-700"
          >
            <MdOutlineNightShelter size={22} />
            <span className="font-medium text-[17px]">Registrar um abrigo</span>
          </Link>
        )}
      </div>

      <QuickAction />
      <ListMissingPersons missingPersons={missingPersons} />
      <CriticalAlerts />
    </div>
  )
}
