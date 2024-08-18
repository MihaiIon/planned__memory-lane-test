import './App.css'

import { useState } from 'react'

import { Button } from '@mui/material'

import SideNavigation from './components/SideNavigation'
import TopNavigation from './components/TopNavigation'
import MemoryCard from './components/MemoryCard'

import type { UserType, MemoryType, MemoryWithUserType } from './types/app'

const fakeUser: UserType = {
  firstName: 'Jae',
  lastName: 'Becker',
  fullName: 'Jae Becker',
  initials: 'JB',
  avatar: 'https://randomuser.me/api/portraits',
}

const fakeMemories: MemoryWithUserType[] = [
  {
    id: '1',
    title: 'First Day of School',
    date: 'September 14, 2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
    user: fakeUser,
  },
  {
    id: '2',
    title: 'First Day of Vacation',
    date: 'May 14, 2021',
    content:
      'Aliquam erat volutpat. Nullam nec nunc nec nunc lacinia fermentum. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
    user: fakeUser,
  },
  {
    id: '3',
    title: 'First Day of Work',
    date: 'January 14, 2021',
    content:
      'Blandit, odio. Nullam nec nunc nec nunc lacinia fermentum. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
    user: fakeUser,
  },
]

const emptyFormData: MemoryType = {
  title: '',
  date: '',
  content: '',
}

function App() {
  const handleAddMemory = () => {
    console.log('Add Memory')
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
        <Button onClick={handleAddMemory} variant='contained' className='!mb-6'>
          Add Memory
        </Button>
        <div className='flex flex-col justify-center'>
          {memories.map((memory, index) => (
            <MemoryCard key={index} memory={memory} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
