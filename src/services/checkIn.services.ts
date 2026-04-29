import api from '@/services/api.services'
import type { createCheckIn } from '@/types/checkIn'

export const checkInService = {
  async register(data: createCheckIn) {
    const response = await api.post('/check-ins', {
      personName: data.name,
      dateBirth: new Date(data.dateBirth),
      shelterId: data.shelterId,
    })
    return response.data
  },
}
