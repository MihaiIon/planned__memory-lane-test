import type { UserType, MemoryType, MemoryWithUserType } from './types/app'

export const fakeUser: UserType = {
  firstName: 'Jae',
  lastName: 'Becker',
  fullName: 'Jae Becker',
  initials: 'JB',
  avatar: 'https://randomuser.me/api/portraits',
}

export const fakeMemories: MemoryWithUserType[] = [
  {
    id: '1',
    title: 'First Day of School',
    date: 'September 14, 2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
    user: fakeUser,
  },
  {
    id: '2',
    title: 'First Day of Vacation',
    date: 'May 14, 2021',
    content:
      'Aliquam erat volutpat. Nullam nec nunc nec nunc lacinia fermentum. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
    user: fakeUser,
  },
  {
    id: '3',
    title: 'First Day of Work',
    date: 'January 14, 2021',
    content:
      'Blandit, odio. Nullam nec nunc nec nunc lacinia fermentum. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
    user: fakeUser,
  },
]
