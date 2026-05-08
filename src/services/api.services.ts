import axios from 'axios'
import { translateError } from '@/utils/errorMessages'

const api = axios.create({
  baseURL: import.meta.env.VITE_URL_PONTO_SEGURO_API, // Puxado do seu collection
})

// Interceptor para injetar o token em toda requisição se ele existir no Storage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@pontoSeguro:token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Interceptor para lidar com erros da API
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message
      return Promise.reject(new Error(translateError(message)))
    }
    return Promise.reject(new Error('Erro inesperado'))
  },
)

export default api
