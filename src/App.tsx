import './App.css'

import SideNavigation from './components/SideNavigation'
import TopNavigation from './components/TopNavigation'
import MemoryCard from './components/MemoryCard'
import { Button } from '@mui/material'

const fakeUser = {
  firstName: 'Jae',
  lastName: 'Becker',
  fullName: 'Jae Becker',
  initials: 'JB',
  avatar: 'https://randomuser.me/api/portraits',
}

const fakeMemories = [
  {
    title: 'First Day of School',
    date: 'September 14, 2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
  },
  {
    title: 'First Day of Vacation',
    date: 'May 14, 2021',
    content:
      'Aliquam erat volutpat. Nullam nec nunc nec nunc lacinia fermentum. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
  },
  {
    title: 'First Day of Work',
    date: 'January 14, 2021',
    content:
      'Blandit, odio. Nullam nec nunc nec nunc lacinia fermentum. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
  },
]

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
          {fakeMemories.map((memory, index) => (
            <MemoryCard
              key={index}
              title={memory.title}
              date={memory.date}
              content={memory.content}
              user={fakeUser}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
