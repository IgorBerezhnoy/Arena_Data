import { DetailedHTMLProps, ElementRef, InputHTMLAttributes, JSX, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './searchTextField.module.css'

import { SearchIcon } from '../../assets/icons'
import { TextField, TextFieldProps } from '../textField'

interface SearchProps extends TextFieldProps {}

export const SearchTextField = () => {
  return (
    <div className={s.wrapper}>
      <SearchIcon className={s.iconSearch} />
      <TextField className={s.input} placeholder={'Поиск'} />
    </div>
  )
}
