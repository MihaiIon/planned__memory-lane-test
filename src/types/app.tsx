export type UserType = {
  firstName: string
  lastName: string
  fullName: string
  initials: string
  avatar: string
}

export type MemoryType = {
  id?: number
  name: string
  timestamp: number
  description: string
}

export type MemoryWithUserType = MemoryType & {
  user: UserType
}
