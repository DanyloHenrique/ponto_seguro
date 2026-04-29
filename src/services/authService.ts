import type { createUser } from '@/types/user'
import api from './api.services'

export const authService = {
  // POST /sessions
  login: async (email: string, password: string) => {
    const response = await api.post('/sessions', { email, password })

    if (response.data.token) {
      localStorage.setItem('@pontoSeguro:token', response.data.token)
    }

    return response.data.token
  },

  // POST /users
  register: async (userData: createUser) => {
    const response = await api.post('/users', userData)
    console.log('🚀 ~ response:', response.data)
    alert(response.data)
    return response.data
  },
}
