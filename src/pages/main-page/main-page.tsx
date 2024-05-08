import React, { memo } from 'react'

import s from './main-page.module.css'

import { Loader, MainContent, MainHeader, NavLinks } from '../../components'
import { ErrorCard } from '../../components/errorCard'
import { UserTypes } from '../../server'

export const MainPage = memo(({ error, fetchNextPage, headers, isLoading, users }: Props) => {
  const haveLang = headers.length > 0

  return (
    <>
      <MainHeader />
      <div className={s.container}>
        <NavLinks />
        {haveLang && <MainContent fetchNextPage={fetchNextPage} headers={headers} users={users} />}
        {isLoading && <Loader />}
        {error && <ErrorCard />}
      </div>
    </>
  )
})

type Props = {
  error: boolean
  fetchNextPage: () => void
  headers: Header[]
  isLoading: boolean
  users: UserTypes[]
}
export type Header = {
  order: number
  text: string
}
