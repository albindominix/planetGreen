import { clsx } from 'clsx'

export function cn(...inputs) {
  return clsx(inputs)
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password) {
  return password.length >= 8
}