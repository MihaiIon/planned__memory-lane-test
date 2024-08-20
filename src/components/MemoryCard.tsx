import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import IconButton from '@mui/material/IconButton'
import { Edit, Delete } from '@mui/icons-material'

import UserAvatar from './UserAvatar'

import type { MemoryWithUserType } from '../types/app'

type MemoryCardProps = {
  memory: MemoryWithUserType
  onDelete: (memoryId: string) => void
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
        avatar={<UserAvatar user={memory.user} />}
        action={[
          <IconButton aria-label='edit'>
            <Edit />
          </IconButton>,
          <IconButton
            aria-label='delete'
            onClick={() => props.onDelete(memory.id ?? '')}
          >
            <Delete />
          </IconButton>,
        ]}
        title={memory.user.fullName}
        className='!pb-0'
      />
      <CardContent className='!pt-0'>
        <h3 className='text-xl font-normal mb-3 mt-3'>{memory.name}</h3>
        <p className='text-gray-600 text-md'>{memory.description}</p>
        <p className='mt-4 text-gray-800 text-xs'>
          📅 {formatTimestampToDate(memory.timestamp)}
        </p>
      </CardContent>
    </Card>
  )
}
