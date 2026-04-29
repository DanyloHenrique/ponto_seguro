import React, { type ReactNode, useState } from 'react'

export const AuthContext = React.createContext<string | null>(null)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, _setToken] = useState<string | null>(() => {
    return localStorage.getItem('@pontoSeguro:token')
  })

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>
}
