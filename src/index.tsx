import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { makeServer } from './server/server'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}
ReactDOM.render(<App />, document.getElementById('root'))
