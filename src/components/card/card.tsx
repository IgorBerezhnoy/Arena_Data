import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react'

import { clsx } from 'clsx'

import s from './card.module.css'

export const Card = memo(({ className, ...rest }: CardProps) => {
  return <div className={clsx(s.wrapper, className)} {...rest}></div>
})

interface CardProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
