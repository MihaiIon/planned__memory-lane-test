import { CubeIcon } from '@heroicons/react/20/solid'
import './App.css'

import SideNavigation from './components/SideNavigation'
import TopNavigation from './components/TopNavigation'

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
    date: 'September 14, 2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
  },
  {
    title: 'First Day of Work',
    date: 'September 14, 2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
  },
]

function App() {
  return (
    <div className='absolute top-0 right-0 left-0 bottom-0 overflow-hidden'>
      <SideNavigation />
      <TopNavigation />
      /* Content */
      <main className='absolute top-12 left-16 right-0 bottom-0 overflow-y-auto bg-gray-50 pt-6'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='overflow-hidden rounded-lg bg-white shadow h-96'>
            <div className='px-4 py-5 sm:p-6'>
              <div className='flex items-center'>
                <CubeIcon className='h-16 w-16 inline-block' />
                <h1 className='text-4xl font-semibold text-gray-900 mb-4 ml-4 mt-4'>
                  Memory lane
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
