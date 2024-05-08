import React from 'react'

import s from './mainContent.module.css'

import { Header } from '../../pages/main-page'
import { Card } from '../card'
import { TableUsersContainer } from '../tableUsers'
import { SubheaderOfTable } from './lib/subheaderOfTable'

export const MainContent = ({ fetchNextPage, headers, users }: Props) => {
  return (
    <Card className={s.wrapper}>
      <SubheaderOfTable />
      <TableUsersContainer fetchNextPage={fetchNextPage} headers={headers} users={users} />
    </Card>
  )
}

type Props = { fetchNextPage: () => void; headers: Header[]; users: any[] }
