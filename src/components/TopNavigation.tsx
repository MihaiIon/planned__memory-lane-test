import Paper from '@mui/material/Paper'

import UserAvatar from './UserAvatar'

import { fakeUser } from '../fakeData'

export default function TopNavigation() {
  return (
    <Paper
      className='absolute top-0 right-0 left-20 h-16 border-b overflow-hidden'
      elevation={0}
      square
    >
      <div className='flex items-center justify-end h-full px-6'>
        <UserAvatar user={fakeUser} />
      </div>
    </Paper>
  )
}
