import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../useAuth'
import { ROUTES } from '../../libs/constants'
import toast from 'react-hot-toast'

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  return useMutation({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: () => {
   toast.success('Logged in successfully!')
      navigate(ROUTES.DASHBOARD)
    },
    onError: (error) => {
    toast.error(error.message || 'Login failed')
    },
  })
}

export const useRegisterMutation = () => {
  const navigate = useNavigate()
  const { register } = useAuth()

  return useMutation({
    mutationFn: ({ email, password, passwordConfirm,fullName,username }) => 
      register(email, password, passwordConfirm, fullName,username ),
    onSuccess: () => {
      toast.success('Account created successfully! Please login.')
      navigate(ROUTES.LOGIN)
    },
    onError: (error) => {
       toast.error(error.message || 'Registration failed')
    },
  })
}
