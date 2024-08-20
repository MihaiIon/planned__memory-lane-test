export type UserType = {
  firstName: string
  lastName: string
  fullName: string
  initials: string
  avatar: string
}

export type MemoryType = {
  id?: string
  title: string
  timestamp: number
  content: string
}

export type MemoryWithUserType = MemoryType & {
  user: UserType
}
