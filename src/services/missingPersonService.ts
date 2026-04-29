import api from '@/services/api.services'
import type { postMissingPerson } from '@/types/missingPerson'

export const missingPersonService = {
  async fetch() {},

  async register(data: postMissingPerson) {
    const result = await api.post('/missing-peoples', {
      name: data.name,
      dateBirth: new Date(data.dateBirth),
      lastSeenLocation: data.lastSeenLocation,
      contactName: data.contactName,
      contactPhone: data.contactPhone,
      physicalDescription: data.physicalDescription,
      clothesDescription: data.clothesDescription,
    })
    console.log('🚀 ~ result:', result.data)
    if (!(result.status === 201)) {
      return alert('Erro ao registrar pessoa')
    }
    return result.data
  },
}
