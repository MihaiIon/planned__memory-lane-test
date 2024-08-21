/**
 * Formats a timestamp to a date string in the format "Month Day, Year" (e.g., "January 1, 2023").
 */
export const formatTimestampToReadableDate = (timestamp: number): string => {
  const dateObj = new Date(timestamp)

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: userTimeZone,
  }
  const dateString = dateObj.toLocaleDateString('en-US', options)

  return dateString
}

/**
 * Formats a timestamp to a local date string (YYYY-MM-DD).
 */
export const formatTimestampToLocalDateString = (timestamp: number) => {
  const userTimezoneOffset = new Date().getTimezoneOffset() * 60000
  const localDate = new Date(timestamp - userTimezoneOffset)
  return localDate.toISOString().split('T')[0]
}
