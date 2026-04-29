import { useEffect, useState } from 'react'
import { shelterService } from '@/services/shelterService'
import type { nearbyShelter } from '@/types/shelter'

type useFetchNearbySheltersProps = {
  latitude: number | null
  longitude: number | null
}

export const useFetchNearbyShelters = ({
  longitude,
  latitude,
}: useFetchNearbySheltersProps) => {
  const [shelters, setShelters] = useState<nearbyShelter[]>([])

  useEffect(() => {
    if (!latitude || !longitude) return

    const fetchNearbyShelters = async () => {
      try {
        const shelters = await shelterService.fetchNearby(latitude, longitude)
        setShelters(shelters)
      } catch (error) {
        console.error('Erro ao buscar abrigos próximos', error)
      }
    }
    fetchNearbyShelters()
  }, [latitude, longitude])

  return { shelters }
}
