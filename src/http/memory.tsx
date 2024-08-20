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

type FetchMemoriesResponseType = {
  memories: MemoryType[]
}

export const fetchMemories = async (): Promise<FetchMemoriesResponseType> => {
  try {
    const response = await fetch('http://localhost:4001/memories')
    return response.json()
  } catch (error) {
    throw new Error(`Error fetching memories: ${error}`)
  }
}
