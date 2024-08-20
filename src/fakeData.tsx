import type { UserType, MemoryWithUserType } from './types/app'

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
    name: 'First Day of School',
    timestamp: new Date('September 14, 2021').getTime(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
    user: fakeUser,
  },
  {
    id: '2',
    name: 'First Day of Vacation',
    timestamp: new Date('May 14, 2021').getTime(),
    description:
      'Aliquam erat volutpat. Nullam nec nunc nec nunc lacinia fermentum. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
    user: fakeUser,
  },
  {
    id: '3',
    name: 'First Day of Work',
    timestamp: new Date('January 14, 2021').getTime(),
    description:
      'Blandit, odio. Nullam nec nunc nec nunc lacinia fermentum. Sed nec sagittis elit. Nullam id nunc et nunc lacinia fermentum.',
    user: fakeUser,
  },
]
