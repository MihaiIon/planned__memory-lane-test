import './App.css'
import { useState } from 'react'
import { Button } from '@mui/material'

import MemoryFormModal from './components/MemoryFormModal'
import SideNavigation from './components/SideNavigation'
import TopNavigation from './components/TopNavigation'
import MemoryList from './components/MemoryList'

import { useMemories } from './hooks/useMemories'
import { fakeUser } from './fakeData'

import type { MemoryType } from './types/app'

const EMPTY_FORM_DATA: MemoryType = {
  name: '',
  timestamp: new Date().getTime(),
  description: '',
}

function App() {
  const {
    memories,
    handleCreateMemory,
    handleUpdateMemory,
    handleDeleteMemory,
  } = useMemories()
  const [memoryFormData, setMemoryFormData] =
    useState<MemoryType>(EMPTY_FORM_DATA)
  const [isMemoryFormModalOpen, setIsMemoryFormModalOpen] = useState(false)

  const handleSaveMemory = async (memory: MemoryType) => {
    if (memory.id) {
      await handleUpdateMemory(memory)
    } else {
      await handleCreateMemory(memory)
    }
    setIsMemoryFormModalOpen(false)
  }

  const handleAddMemory = (memory: Partial<MemoryType> = {}) => {
    setMemoryFormData({ ...EMPTY_FORM_DATA, ...memory })
    setIsMemoryFormModalOpen(true)
  }

  const handleEditMemory = (memory: MemoryType) => {
    setMemoryFormData(memory)
    setIsMemoryFormModalOpen(true)
  }

  return (
    <div className='absolute top-0 right-0 left-0 bottom-0 overflow-hidden'>
      <SideNavigation />
      <TopNavigation />
      <main className='absolute top-16 left-20 right-0 bottom-0 overflow-y-auto bg-gray-50 py-8 px-2 sm:px-8'>
        <h1 className='text-4xl font-medium mb-6 text-center'>
          {fakeUser.firstName}'s Memory Lane
        </h1>
        <Button onClick={handleAddMemory} variant='contained' className='!mb-6'>
          Add Memory
        </Button>
        <MemoryList
          memories={memories}
          onAdd={handleAddMemory}
          onEdit={handleEditMemory}
          onDelete={handleDeleteMemory}
        />

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
