import React from 'react'
import { useForm } from '@tanstack/react-form'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Checkbox from '../components/ui/Checkbox'
import { useLoginMutation } from '../hooks/queries'
import { validateEmail } from '../libs/utils'
import { ROUTES } from '../libs/constants'
import logo from '../assets/logo.svg'
import AuthLayout from '../layout/AuthLayout'

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [rememberMe, setRememberMe] = React.useState(false)
  const navigate = useNavigate()
  const loginMutation = useLoginMutation()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      await loginMutation.mutateAsync({ 
        ...value, 
        rememberMe 
      })
    },
  })

  return (
    <AuthLayout>
      {/* Main Card Container */}
      <div className="w-full max-w-sm bg-[#141414] rounded-3xl p-4 sm:p-6 shadow-2xl">
        {/* Header */}
        <div className=" mb-6 sm:mb-8">
          <div className="flex items-center justify-start gap-2 mb-6 sm:mb-8">
            <img src={logo} alt="" className='h-8' />
          </div>
          <h1 className="text-xl sm:text-2xl font-medium text-white mb-2">Log in <span className='text-gray-300'>to your account!</span> </h1>
          <p className="text-gray-400 text-sm">Enter your email and password to login</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
          className="space-y-4 sm:space-y-5"
        >
          {/* Email Field */}
          <div>
            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? 'Email is required'
                    : !validateEmail(value)
                    ? 'Please enter a valid email'
                    : undefined,
              }}
            >
              {(field) => (
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <Input
                      type="email"
                      placeholder="Enter email address.."
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      error={field.state.meta.errors}
                    />
                  </div>
                  {field.state.meta.errors && (
                    <p className="mt-2 text-sm text-red-400">
                      {field.state.meta.errors}
                    </p>
                  )}
                </div>
              )}
            </form.Field>
          </div>

          {/* Password Field */}
          <div>
            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) =>
                  !value ? 'Password is required' : undefined,
              }}
            >
              {(field) => (
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password.."
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      showPasswordToggle
                      showPassword={showPassword}
                      onTogglePassword={() => setShowPassword(!showPassword)}
                      error={field.state.meta.errors}
                    />
                  </div>
                  {field.state.meta.errors && (
                    <p className="mt-2 text-sm text-red-400">
                      {field.state.meta.errors}
                    </p>
                  )}
                </div>
              )}
            </form.Field>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 pt-2">
            <div className="flex items-center gap-2">
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe" className="text-white text-sm">
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Forgot Password ?
            </Link>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              className="w-full bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-full py-3 text-sm"
              loading={loginMutation.isPending}
              disabled={!form.state.canSubmit}
            >
              {loginMutation.isPending ? 'Signing In...' : 'Sign In to Account'}
            </Button>
          </div>
<div className='border-b border-white/50'></div>
          {/* Divider */}
          <div className="text-center ">
            <p className="text-gray-400 text-sm">Don't have account ?</p>
          </div>

          {/* Create Account Button */}
          <Button
            type="button"
            variant="secondary"
            className="w-full bg-transparent border border-gray-600 text-white hover:bg-gray-800 font-medium rounded-full py-3 text-sm"
            onClick={() => navigate(ROUTES.REGISTER)}
          >

            Create New Account
          </Button>

          {/* Footer */}
          <div className="text-center pt-4">
            <p className="text-xs text-gray-500">2025 © Demo Panel | FE</p>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default LoginPage