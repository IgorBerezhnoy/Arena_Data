import React, { memo } from 'react'

import s from './errorCard.module.css'

import img from '../../assets/img/error.png'

export const ErrorCard = memo(() => (
  <div className={s.wrapper}>
    <img alt={'error'} src={img} />
    <h1>Произошла ошибка</h1>
    <p>Попробуйте перезагрузить страницу</p>
  </div>
))
