import api from '@/services/api.services'
import type { createCheckIn } from '@/types/checkIn'

export const checkInService = {
  async register(data: createCheckIn) {
    const response = await api.post('/check-ins', {
      personName: data.name,
      dateBirth: new Date(data.dateBirth),
      cpf: data.cpf,
      shelterId: data.shelterId,
    })
    console.log("🚀 ~ response.data:", response.data)
    return response.data
  },
}
