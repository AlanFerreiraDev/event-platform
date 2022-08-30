import { CapitalizeDateFormattedProps } from './interfaces'

export const CapitalizeDateFormatted = ({
  dateFormatted,
}: CapitalizeDateFormattedProps) =>
  dateFormatted.charAt(0).toUpperCase() + dateFormatted.slice(1)
