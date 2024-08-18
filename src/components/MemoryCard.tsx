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
}
