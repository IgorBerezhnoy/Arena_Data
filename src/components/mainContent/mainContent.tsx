import React from 'react'

import { clsx } from 'clsx'

import s from './mainContent.module.css'

import App2 from '../../App2'
import { ErrorIcon, FailIcon } from '../../assets/icons'
import { statistics } from '../../constants'
import { Button } from '../button'
import { Card } from '../card'
import { Statistics } from './statistics'

export const MainContent = ({ fetchNextPage, headers, users }: Props) => {
  return (
    <Card className={s.wrapper}>
      <h1 className={s.title}>Проверка</h1>
      <div className={s.statisticsAndButtons}>
        <Statistics {...statistics} />
        <div className={s.buttons}>
          <Button variant={'error'}>
            <ErrorIcon className={s.icon} />
            Отменить
          </Button>
          <Button className={s.ml8} variant={'primary'}>
            <FailIcon className={s.icon} />
            Импортировать объекты
          </Button>
        </div>
      </div>
      <App2 fetchNextPage={fetchNextPage} headers={headers} users={users} />
    </Card>
  )
}
type Props = { fetchNextPage: () => void; headers: string[]; users: any[] }
