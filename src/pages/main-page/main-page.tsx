import React from 'react'

import s from './main-page.module.css'

import { MainHeader } from '../../components/header/mainHeader'
import { Loader } from '../../components/loader'
import { MainContent } from '../../components/mainContent/mainContent'
import { NavLinks } from '../../components/navLinks/navLinks'
import { UserType } from '../../server/bd/bd.ts'

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
  headers: string[]
  isLoading: boolean
  users: UserType[]
}
