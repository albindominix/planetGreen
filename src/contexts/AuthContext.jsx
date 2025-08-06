import React, { createContext, useEffect, useState } from 'react'
import { pb } from '../api/pocketbase'

export  const AuthContext = createContext({})

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider')
//   }
//   return context
// }

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    if (pb.authStore.isValid) {
      setUser(pb.authStore.model)
    }
    setIsLoading(false)

    // Listen for auth changes
    const unsubscribe = pb.authStore.onChange((token, model) => {
      setUser(model)
    })

    return unsubscribe
  }, [])

  const login = async (email, password) => {
    const authData = await pb.collection('users').authWithPassword(email, password)
    setUser(authData.record)
    return authData
  }

  const register = async (email, password, passwordConfirm,name,username) => {
    const user = await pb.collection('users').create({
      email,
      password,
      passwordConfirm,
      username,
      name
    })
    return user
  }

  const logout = () => {
    pb.authStore.clear()
    setUser(null)
  }

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}