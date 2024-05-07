import React from 'react'

import s from './mainContent.module.css'

import { StatisticsType } from '../../constants'

export const Statistics = ({ creation, processed, total, update, withError }: StatisticsType) => {
  return (
    <div className={s.statistics}>
      Обработано <span className={s.num}> {processed} </span> из
      <span className={s.num}> {total} </span> | Создание:
      <span className={s.num}> {creation} </span> Обновление:{' '}
      <span className={s.num}> {update} </span> С ошибками:
      <span className={s.num}> {withError} </span>
    </div>
  )
}
