import MemoryList from '../components/MemoryList'

import logoImg from '../assets/logo.png'

import { useMemories } from '../hooks/useMemories'
import { fakeUser } from '../fakeData'

import type { MemoryType } from '../types/app'

export default function SharedView() {
  const { memories } = useMemories()

  const handleAddMemory = (memory: Partial<MemoryType> = {}) => {
    console.log(memory)
  }
  const handleEditMemory = (memory: MemoryType) => {
    console.log(memory)
  }
  const handleDeleteMemory = (memoryId: number) => {
    console.log(memoryId)
  }

  return (
    <main className='h-screen w-full bg-gray-50 pt-28 pb-20 px-2 sm:px-8'>
      <img src={logoImg} alt='Memory Lane Logo' className='mx-auto w-32 mb-8' />

      <h1 className='text-4xl font-medium mt-4 text-center'>
        <span>{fakeUser.firstName}'s Memory Lane</span>
      </h1>

      <hr className='my-4 w-36 mx-auto border-t-1 border-gray-200 my-6' />

      <MemoryList
        memories={memories}
        onAdd={handleAddMemory}
        onEdit={handleEditMemory}
        onDelete={handleDeleteMemory}
        readOnly
      />
    </main>
  )
}
