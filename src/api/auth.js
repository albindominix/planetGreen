import { pb } from './pocketbase'

export const authApi = {
  login: async (email, password) => {
    return await pb.collection('users').authWithPassword(email, password)
  },
  
  register: async (email, password, passwordConfirm) => {
    const data = {
      email,
      password,
      passwordConfirm,
    }
    
    return await pb.collection('users').create(data)
  },
  
  logout: () => {
    pb.authStore.clear()
  },
  
  getCurrentUser: () => {
    return pb.authStore.model
  },
  
  isAuthenticated: () => {
    return pb.authStore.isValid
  }
}