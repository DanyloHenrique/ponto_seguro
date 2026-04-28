import axios from 'axios'

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

export default api
