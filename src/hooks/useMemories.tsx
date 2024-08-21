import { useState, useEffect } from 'react'
import {
  fetchMemories,
  createMemory,
  updateMemory,
  deleteMemory,
} from '../http/memory'
import type { MemoryType, MemoryWithUserType } from '../types/app'

import { fakeUser } from '../fakeData'

export const useMemories = () => {
  const [memories, setMemories] = useState<MemoryWithUserType[]>([])

  useEffect(() => {
    const loadMemories = async () => {
      const response = await fetchMemories()
      // Ideally this would be done backend, but I didn't want to create additional tables for this project
      // So I'm just adding the user to the memory object here
      setMemories(
        response.memories.map((memory) => ({ ...memory, user: fakeUser }))
      )
    }
    loadMemories()
  }, [])

  const handleCreateMemory = async (memory: MemoryType) => {
    const response = await createMemory(memory)
    setMemories((prevMemories) => [
      ...prevMemories,
      { ...response.memory, user: fakeUser },
    ])
  }

  const handleUpdateMemory = async (memory: MemoryType) => {
    const response = await updateMemory(memory)
    setMemories((prevMemories) =>
      prevMemories.map((prevMemory) =>
        prevMemory.id === response.memory.id
          ? { ...response.memory, user: fakeUser }
          : prevMemory
      )
    )
  }

  const handleDeleteMemory = async (memoryId: number) => {
    await deleteMemory(memoryId)
    setMemories((prev) => prev.filter((memory) => memory.id !== memoryId))
  }

  return {
    memories,
    handleCreateMemory,
    handleUpdateMemory,
    handleDeleteMemory,
  }
}
