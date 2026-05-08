import api from '@/services/api.services'
import type { postMissingPerson } from '@/types/missingPerson'

export const missingPersonService = {
  async fetch() {},

  async register(data: postMissingPerson) {
    const result = await api.post('/missing-peoples', {
      name: data.name,
      dateBirth: new Date(data.dateBirth),
      cpf: data.cpf,
      lastSeenLocation: data.lastSeenLocation,
      contactName: data.contactName,
      contactPhone: data.contactPhone,
      physicalDescription: data.physicalDescription,
      clothesDescription: data.clothesDescription,
    })
    console.log('🚀 ~ result:', result.data)
    if (!(result.status === 201)) {
      return alert(`Erro ao registrar pessoa - ${result.data.message}`)
    }
    return result.data
  },

  //id in the token
  async fetchByUserId() {
    const result = await api.get(`/missing-peoples/me`)
    if (!(result.status === 200)) {
      return alert(`Erro ao buscar pessoas perdidas - ${result.data.message}`)
    }
    return result.data.payload
  },
}
