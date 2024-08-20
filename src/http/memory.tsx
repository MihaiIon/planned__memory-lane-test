import type { MemoryType } from '../types/app'

export const fetchMemories = async () => {
  try {
    const response = await fetch('http://localhost:4001/memories')
    return response.json()
  } catch (error) {
    console.error('Error fetching memories:', error)
  }
}
