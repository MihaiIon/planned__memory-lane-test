import type { MemoryType } from '../types/app'

export const createMemory = async (memory: MemoryType) => {
  try {
    const response = await fetch('http://localhost:4001/memories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: memory.title,
        content: memory.content,
        timestamp: memory.timestamp,
      }),
    })
    return response.json()
  } catch (error) {
    console.error('Error creating memory:', error)
  }
}

export const fetchMemories = async () => {
  try {
    const response = await fetch('http://localhost:4001/memories')
    return response.json()
  } catch (error) {
    console.error('Error fetching memories:', error)
  }
}
