import React from 'react'
import ReactDOM from 'react-dom'

import '../src/styles/_boilerplate.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import App from './App'
import { makeServer } from './server/server'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}
ReactDOM.render(<App />, document.getElementById('root'))
