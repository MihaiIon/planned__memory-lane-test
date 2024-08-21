import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import IconButton from '@mui/material/IconButton'
import { Edit, Delete } from '@mui/icons-material'

import { formatTimestampToReadableDate } from '../utils/dateUtils'

import UserAvatar from './UserAvatar'

import type { MemoryType, MemoryWithUserType } from '../types/app'

type MemoryCardProps = {
  memory: MemoryWithUserType
  onEdit: (memory: MemoryType) => void
  onDelete: (memoryId: number) => void
}

export default function MemoryCard(props: MemoryCardProps) {
  const memory: MemoryWithUserType = props.memory

  const handleEdit = () => {
    props.onEdit({
      id: memory.id,
      name: memory.name,
      timestamp: memory.timestamp,
      description: memory.description,
    } as MemoryType)
  }

  return (
    <Card
      sx={{ width: 450 }}
      variant='elevation'
      elevation={0}
      className='memory-card border mx-auto'
    >
      <CardHeader
        avatar={<UserAvatar user={memory.user} />}
        action={[
          <IconButton aria-label='edit' onClick={handleEdit}>
            <Edit />
          </IconButton>,
          <IconButton
            aria-label='delete'
            onClick={() => props.onDelete(memory.id ?? -1)}
          >
            <Delete />
          </IconButton>,
        ]}
        title={memory.user.fullName}
        className='!pb-0'
      />
      <CardContent className='!pt-0'>
        <h3 className='text-2xl font-medium mb-3 mt-3'>{memory.name}</h3>
        <p className='text-gray-600 text-xl'>{memory.description}</p>
        <p className='mt-4 text-gray-800 text-center text-sm mt-6'>
          📅 {formatTimestampToReadableDate(memory.timestamp)}
        </p>
      </CardContent>
    </Card>
  )
}
