import type { MemoryType } from '../types/app'

const API_URL = 'http://localhost:4001'

type CreateMemoryResponseType = {
  memory: MemoryType
}

export const createMemory = async (
  memory: MemoryType
): Promise<CreateMemoryResponseType> => {
  try {
    const response = await fetch(`${API_URL}/memories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: memory.name,
        description: memory.description,
        timestamp: memory.timestamp,
      }),
    })
    return response.json()
  } catch (error) {
    throw new Error(`Error creating memory: ${error}`)
  }
}

type FetchMemoriesResponseType = {
  memories: MemoryType[]
}

export const fetchMemories = async (): Promise<FetchMemoriesResponseType> => {
  try {
    const response = await fetch(`${API_URL}/memories`)
    return response.json()
  } catch (error) {
    throw new Error(`Error fetching memories: ${error}`)
  }
}
