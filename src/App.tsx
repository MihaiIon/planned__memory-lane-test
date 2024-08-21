import './App.css'
import { useState } from 'react'
import { Card, CardContent, TextField } from '@mui/material'

import MemoryFormModal from './components/MemoryFormModal'
import SideNavigation from './components/SideNavigation'
import TopNavigation from './components/TopNavigation'
import MemoryList from './components/MemoryList'
import UserAvatar from './components/UserAvatar'
import ShareButton from './components/ShareButton'

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
        <h1 className='text-4xl font-medium mt-4 text-center'>
          <span>{fakeUser.firstName}'s Memory Lane</span>
          <ShareButton />
        </h1>
        <hr className='my-4 w-36 mx-auto border-t-1 border-gray-200 my-6' />
        <Card
          sx={{ width: 450 }}
          variant='elevation'
          elevation={0}
          className='memory-card border mx-auto mb-4'
        >
          <CardContent className='!py-6'>
            <div className='flex items-center'>
              <UserAvatar user={fakeUser} />
              <TextField
                id='form--memory-name'
                placeholder='Share a precious memory...'
                className='w-full !ml-4 bg-gray-50'
                onClick={() => handleAddMemory()}
                value={''}
              />
            </div>
          </CardContent>
        </Card>

        {memories.length === 0 && (
          <div className='text-gray-500 text-center text-xl mt-8'>
            A blank canvas, waiting for your
            <br />
            cherished moments to bring it to life 🌠
          </div>
        )}

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
