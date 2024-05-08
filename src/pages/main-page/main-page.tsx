import React from 'react'

import s from './main-page.module.css'

import { Loader, MainContent, MainHeader, NavLinks } from '../../components'
import { UserType } from '../../server'

export function MainPage({ error, fetchNextPage, headers, isLoading, users }: Props) {
  const haveLang = headers.length > 0

  return (
    <>
      <MainHeader />
      <div className={s.container}>
        <NavLinks />
        {haveLang && <MainContent fetchNextPage={fetchNextPage} headers={headers} users={users} />}
        {isLoading && <Loader />}
        {error && <div>isError</div>}
        {/*  TODO Обработка ошибок*/}
      </div>
    </>
  )
}

type Props = {
  error: boolean
  fetchNextPage: () => void
  headers: Header[]
  isLoading: boolean
  users: UserType[]
}
export type Header = {
  order: number
  text: string
}
