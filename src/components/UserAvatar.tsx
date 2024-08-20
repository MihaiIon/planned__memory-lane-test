import { Avatar } from '@mui/material'

import jaeBeckerAvatar from '../assets/jae-becker.jpg'

import type { UserType } from '../types/app'

type UserAvatarProps = {
  user: UserType
}

export default function UserAvatar(props: UserAvatarProps) {
  return (
    <Avatar
      alt={props.user.fullName}
      src={jaeBeckerAvatar}
      sx={{ width: 42, height: 42 }}
    />
  )
}
