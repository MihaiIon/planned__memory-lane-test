import './App.css'

import { useEffect, useState } from 'react'

import { Button } from '@mui/material'

import MemoryFormModal from './components/MemoryFormModal'
import SideNavigation from './components/SideNavigation'
import TopNavigation from './components/TopNavigation'
import MemoryCard from './components/MemoryCard'

import { fetchMemories, createMemory, deleteMemory } from './http/memory'

import { fakeUser } from './fakeData'

import type { MemoryType, MemoryWithUserType } from './types/app'

const EMPTY_FORM_DATA: MemoryType = {
  name: '',
  timestamp: new Date().getTime(), // current timestamp
  description: '',
}

function App() {
  const [memories, setMemories] = useState<MemoryWithUserType[]>([])

  const [memoryFormData, setMemoryFormData] =
    useState<MemoryType>(EMPTY_FORM_DATA)
  const [isMemoryFormModalOpen, setIsMemoryFormModalOpen] =
    useState<boolean>(false)

  // Fetch memories on initial render
  useEffect(() => {
    // Ideally this would be done backend, but I didn't want to create additional tables for this project
    // So I'm just adding the user to the memory object here
    fetchMemories().then((data) => {
      const memories: MemoryType[] = data.memories
      const memoriesWithUser: MemoryWithUserType[] = memories.map((memory) => ({
        ...memory,
        user: fakeUser,
      }))

      setMemories(memoriesWithUser)
    })
  }, [])

  // Set the form empty and open the modal
  const handleAddMemory = () => {
    setMemoryFormData(EMPTY_FORM_DATA)
    setIsMemoryFormModalOpen(true)
  }

  const handleSaveMemory = async (memory: MemoryType) => {
    try {
      const data = await createMemory(memory)
      const newMemoryWithUser: MemoryWithUserType = {
        ...data.memory,
        user: fakeUser,
      }

      setMemories([...memories, newMemoryWithUser])
    } catch (error) {
      console.error(`Error saving memory: ${error}`)
    }
  }

  // Delete memory and update the memories
  const handleDeleteMemory = async (memoryId: string) => {
    try {
      await deleteMemory(memoryId)
      const updatedMemories = memories.filter(
        (memory) => memory.id !== memoryId
      )

      setMemories(updatedMemories)
    } catch (error) {
      console.error(`Error deleting memory: ${error}`)
    }
  }

  return (
    <div className='absolute top-0 right-0 left-0 bottom-0 overflow-hidden'>
      <SideNavigation />
      <TopNavigation />
      /* Content */
      <main className='absolute top-12 left-16 right-0 bottom-0 overflow-y-auto bg-gray-50 py-6 px-2 sm:px-8'>
        <h1 className='text-2xl font-normal mb-6'>
          {fakeUser.firstName}'s Memory Lane
        </h1>
        <Button
          onClick={() => handleAddMemory()}
          variant='contained'
          className='!mb-6'
        >
          Add Memory
        </Button>
        <div className='flex flex-col justify-center'>
          {memories.map((memory, index) => (
            <MemoryCard
              key={index}
              memory={memory}
              onDelete={handleDeleteMemory}
            />
          ))}
        </div>
        <MemoryFormModal
          open={isMemoryFormModalOpen}
          onClose={() => setIsMemoryFormModalOpen(false)}
          onSave={handleSaveMemory}
          memoryFormData={memoryFormData}
        />
      </main>
    </div>
  )
}

export default App
