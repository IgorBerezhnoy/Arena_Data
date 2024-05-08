import { memo } from 'react'

import s from './searchTextField.module.css'

import { SearchIcon } from '../../assets/icons'
import { TextField, TextFieldProps } from '../textField'

interface SearchProps extends TextFieldProps {}

export const SearchTextField = memo(({}: SearchProps) => {
  return (
    <div className={s.wrapper}>
      <SearchIcon className={s.iconSearch} />
      <TextField className={s.input} placeholder={'Поиск'} />
    </div>
  )
})
