import type { createUser } from '@/types/user'
import api from './api.services'

export const authService = {
  // POST /sessions
  login: async (email: string, password: string) => {
    const response = await api.post('/sessions', { email, password })

    if (response.data.token) {
      localStorage.setItem('@AjudaAe:token', response.data.token)
    }

    return response.data
  },

  // POST /users
  register: async (userData: createUser) => {
    const response = await api.post('/users', userData)
    return response.data
  },
}
