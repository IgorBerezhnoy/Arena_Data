import React, { memo } from 'react'

import s from '../mainContent.module.css'

import { ErrorIcon, FailIcon } from '../../../assets/icons'
import { statistics } from '../../../constants'
import { Button } from '../../button'
import { Statistics } from './statistics'

export const SubheaderOfTable = memo(() => {
  return (
    <div className={s.statisticsAndButtons}>
      <div>
        <h1 className={s.title}>Проверка</h1>
        <Statistics {...statistics} />
      </div>
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
  )
})
