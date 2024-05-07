import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './button.module.css'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  variant?: 'error' | 'primary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as: Component = 'button', className, variant = 'primary', ...rest } = props

  return <Component className={clsx(s[variant], className, s.button)} {...rest} />
}
