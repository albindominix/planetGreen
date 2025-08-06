import PocketBase from 'pocketbase'

const apiUrl = import.meta.env.VITE_POCKETBASE_URL
export const pb = new PocketBase(apiUrl)
// Disable auto cancellation
pb.autoCancellation(false)