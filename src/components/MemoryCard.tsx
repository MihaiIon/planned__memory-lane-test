import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import memoryImg from '../assets/fake-memory.jpg'

type MemoryCardProps = {
  title: string
  date: string
  content: string
  // Ideally, this would be a User type
  user: {
    firstName: string
    lastName: string
    fullName: string
    initials: string
    avatar: string
  }
}

export default function MemoryCard(props: MemoryCardProps) {
  return (
    <Card
      sx={{ maxWidth: 450 }}
      variant='elevation'
      elevation={0}
      className='memory-card border mb-6'
    >
      <CardHeader
        avatar={<Avatar aria-label='user-avatar'>{props.user.initials}</Avatar>}
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.user.fullName}
        className='!pb-0'
      />
      <CardContent className='!pt-0'>
        <h3 className='text-xl font-normal mb-3 mt-3'>{props.title}</h3>
        <img
          src={memoryImg}
          alt='Memory'
          className='w-full h-48 object-cover rounded-lg mb-3'
        />
        <p className='text-gray-600 text-md'>{props.content}</p>
        <p className='mt-4 text-gray-800 text-xs'>📅 {props.date}</p>
      </CardContent>
    </Card>
  )
}
