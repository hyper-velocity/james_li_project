import axios from 'axios'
import { VITE_API_KEY, VITE_BASE_URL } from '@/consts'

export const api = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${VITE_API_KEY}`
  }
})
