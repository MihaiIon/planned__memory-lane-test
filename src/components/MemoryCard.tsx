import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'

import IconButton from '@mui/material/IconButton'
import { Edit, Delete } from '@mui/icons-material'

import type { MemoryWithUserType } from '../types/app'

import memoryImg from '../assets/fake-memory.jpg'

type MemoryCardProps = {
  memory: MemoryWithUserType
}

/**
 * Helper function. Can be reused in other components if moved to a shared file.
 */
const formatTimestampToDate = (timestamp: number) => {
  const dateObj = new Date(timestamp)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const dateString = dateObj.toLocaleDateString('en-US', options)

  return dateString
}

export default function MemoryCard(props: MemoryCardProps) {
  const memory: MemoryWithUserType = props.memory

  return (
    <Card
      sx={{ maxWidth: 450 }}
      variant='elevation'
      elevation={0}
      className='memory-card border mb-6'
    >
      <CardHeader
        avatar={
          <Avatar aria-label='user-avatar'>{memory.user.initials}</Avatar>
        }
        action={[
          <IconButton aria-label='edit'>
            <Edit />
          </IconButton>,
          <IconButton aria-label='delete'>
            <Delete />
          </IconButton>,
        ]}
        title={memory.user.fullName}
        className='!pb-0'
      />
      <CardContent className='!pt-0'>
        <h3 className='text-xl font-normal mb-3 mt-3'>{memory.title}</h3>
        <img
          src={memoryImg}
          alt='Memory'
          className='w-full h-48 object-cover rounded-lg mb-3'
        />
        <p className='text-gray-600 text-md'>{memory.content}</p>
        <p className='mt-4 text-gray-800 text-xs'>
          📅 {formatTimestampToDate(memory.timestamp)}
        </p>
      </CardContent>
    </Card>
  )
}
