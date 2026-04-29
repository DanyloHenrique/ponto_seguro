import type { createShelter, nearbyShelter } from '@/types/shelter'
import { getDistanceBetweenCoordinates } from '@/utils/get-distance-between-coordinates'
import api from './api.services'

export const shelterService = {
  // get /shelters/:id
  fetchById: async (id: string) => {
    try {
      const response = await api.get(`/shelters/${id}`)
      if (response.data.payload.shelter) return response.data.payload.shelter
    } catch (error) {
      console.error('Erro ao buscar abrigo', error)
      throw error
    }
  },

  // GET /shelters/nearby
  fetchNearby: async (latitude: number, longitude: number) => {
    try {
      const response = await api.get('/shelters/nearby', {
        params: { latitude, longitude },
      })

      return response.data.shelters.map((shelter: nearbyShelter) => ({
        ...shelter,
        distance_in_km: getDistanceBetweenCoordinates(
          { latitude, longitude },
          { latitude: shelter.latitude, longitude: shelter.longitude },
        ).toFixed(1),
      }))

      // return response.data.shelters
    } catch (error) {
      console.error('Erro ao buscar abrigos próximos', error)
      throw error
    }
  },

  // POST /shelters
  register: async (shelterData: createShelter) => {
    const response = await api.post('/shelters', {
      name: shelterData.name,
      address: shelterData.address,
      latitude: shelterData.latitude,
      longitude: shelterData.longitude,
      capacity_max: shelterData.capacity_max,
      capacity_current: 0,
    })

    console.log('🚀 ~ response:', response.data)
    if (!(response.status === 201)) {
      return alert('Erro ao registrar pessoa')
    }
    return response.data
  },
}
