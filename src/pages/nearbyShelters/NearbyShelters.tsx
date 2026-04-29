import { useContext } from 'react'
import { LuCircleAlert } from 'react-icons/lu'
import { MdOutlinePersonPinCircle } from 'react-icons/md'
import { AuthContext } from '@/contexts/AuthContext'
import { Card } from '@/pages/nearbyShelters/components/Card'
import { DeniedLocation } from '@/pages/nearbyShelters/components/DeniedLocation'
import { LoadingNearbyShelter } from '@/pages/nearbyShelters/components/LoadingNearbyShelters'
import { useFetchNearbyShelters } from '@/pages/nearbyShelters/hooks/useFetchNearbyShelters'
import { useUserLocation } from '@/pages/nearbyShelters/hooks/useUserLocation'

export const NearbyShelters = () => {
  const { isDenied: isDeniedLocation, isLoading, location } = useUserLocation()
  const { shelters } = useFetchNearbyShelters({
    longitude: location.longitude,
    latitude: location.latitude,
  })
  const token = useContext(AuthContext)
  console.log('🚀 ~ NearbyShelters ~ token:', token)

  if (isDeniedLocation) return <DeniedLocation />
  if (isLoading) return <LoadingNearbyShelter />

  return (
    <section className="flex h-full flex-col px-6 py-8 align-center lg:mx-auto lg:w-2/3">
      <div className="mb-6">
        <p className="flex items-center gap-2">
          <MdOutlinePersonPinCircle aria-label="false" /> {location.suburb},{' '}
          {location.city}
        </p>
        <p className="text-surface">
          Mostrando {shelters.length} abrigos em até 10KM
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {shelters.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            address={card.address}
            capacity_max={card.capacity_max}
            capacity_current={card.capacity_current}
            distance_in_km={card.distance_in_km}
          />
        ))}
      </div>

      <article className="mt-6 rounded-xl bg-surface p-6">
        <h3 className="flex items-center gap-2 text-safe">
          <LuCircleAlert /> Protocolos de Emergência
        </h3>
        <p className="text-white leading-7">
          Em caso de emergência imediata, contate a Defesa Civil pelo número
          199. Mantenha seus documentos em local seco e siga as rotas de fuga
          indicadas.
        </p>
      </article>
    </section>
  )
}
