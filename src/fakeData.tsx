import type { UserType, MemoryWithUserType } from './types/app'

export const fakeUser: UserType = {
  firstName: 'Jae',
  lastName: 'Becker',
  fullName: 'Jae Becker',
  initials: 'JB',
  avatar: 'some-url',
}

export const fakeMemories: MemoryWithUserType[] = [
  {
    id: 1,
    name: 'My 20th Birthday Bash',
    timestamp: new Date('March 14, 2023').getTime(),
    description:
      'I turned 20 with the wildest rooftop party ever! All my best friends showed up, and we danced until the sun came up.',
    user: fakeUser,
  },
  {
    id: 2,
    name: 'Road Trip to the Mountains',
    timestamp: new Date('May 7, 2023').getTime(),
    description:
      'Spontaneous road trip with Claire and Ben! We drove up to the mountains, blasted music, and got lost a couple of times, but it was the most fun I’ve had in ages.',
    user: fakeUser,
  },
  {
    id: 3,
    name: 'A New Tattoo',
    timestamp: new Date('July 15, 2023').getTime(),
    description:
      'Got my first tattoo today—a little sun on my wrist. It hurt way more than I thought, but it’s totally worth it!',
    user: fakeUser,
  },
  {
    id: 4,
    name: 'Late-Night Study Sesh',
    timestamp: new Date('September 28, 2023').getTime(),
    description:
      'Pulled an all-nighter for my chem exam with a giant cup of coffee and some serious procrastination—thank god for group chats!',
    user: fakeUser,
  },
  {
    id: 5,
    name: 'Friendsgiving',
    timestamp: new Date('November 24, 2023').getTime(),
    description:
      'Hosted my first Friendsgiving! The turkey was a bit dry, but the laughs and memories made up for it. Definitely a new tradition.',
    user: fakeUser,
  },
  {
    id: 6,
    name: 'Holiday in Paris',
    timestamp: new Date('December 20, 2023').getTime(),
    description:
      'Spent Christmas in Paris! The Eiffel Tower lit up at night is even more magical in person. I’m never leaving!',
    user: fakeUser,
  },
  {
    id: 7,
    name: 'New Year’s Eve Kiss',
    timestamp: new Date('January 1, 2024').getTime(),
    description:
      'Rang in the New Year with a kiss from someone special—definitely a night I won’t forget anytime soon!',
    user: fakeUser,
  },
  {
    id: 8,
    name: 'Started Kickboxing',
    timestamp: new Date('February 10, 2024').getTime(),
    description:
      'Tried kickboxing today and it kicked my butt—literally! But I loved every second of it. New hobby, maybe?',
    user: fakeUser,
  },
  {
    id: 9,
    name: 'Spring Break Shenanigans',
    timestamp: new Date('March 28, 2024').getTime(),
    description:
      'Spring Break was wild! We hit the beach every day, and I may or may not have lost my phone in the ocean…oops.',
    user: fakeUser,
  },
  {
    id: 10,
    name: 'Started a New Job',
    timestamp: new Date('May 3, 2024').getTime(),
    description:
      'Landed a new job today! It’s not my dream gig, but hey, it pays the bills. Plus, the people seem cool.',
    user: fakeUser,
  },
  {
    id: 11,
    name: 'My First 5K',
    timestamp: new Date('June 16, 2024').getTime(),
    description:
      'Ran my first 5K! I nearly died at the end, but crossing that finish line felt amazing. Time to start training for the next one!',
    user: fakeUser,
  },
  {
    id: 12,
    name: 'Big Move to the City',
    timestamp: new Date('August 1, 2024').getTime(),
    description:
      'Finally moved to the city! My apartment is tiny, but I’m in love with it already. Here’s to new adventures!',
    user: fakeUser,
  },
]
