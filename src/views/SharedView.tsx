import { useRef } from 'react'

import MemoryList from '../components/MemoryList'
import ShareButton from '../components/ShareButton'
import BackToTopButton from '../components/BackToTopButton'

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

  // For the BackToTopButton component
  const backToTopTargetRef = useRef<HTMLDivElement>(null)

  return (
    <main className='min-h-screen w-full bg-gray-50 pb-32 px-2 sm:px-8'>
      <div ref={backToTopTargetRef} className='mx-auto w-32 mb-8 pt-28'>
        <img src={logoImg} alt='Memory Lane Logo' />
      </div>

      <h1 className='text-4xl font-medium mt-4 text-center'>
        <span>{fakeUser.firstName}'s Memory Lane</span>
        <ShareButton />
      </h1>

      <hr className='my-4 w-36 mx-auto border-t-1 border-gray-200 my-6' />

      <MemoryList
        memories={memories}
        onAdd={handleAddMemory}
        onEdit={handleEditMemory}
        onDelete={handleDeleteMemory}
        readOnly
      />

      {memories.length === 0 && (
        <div className='text-gray-500 text-center text-xl mt-8'>
          This user hasn't shared any memories yet ⛅
        </div>
      )}

      <BackToTopButton targetRef={backToTopTargetRef} />
    </main>
  )
}
