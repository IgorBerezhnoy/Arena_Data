import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import App1 from './App1'

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <App1 />
    </QueryClientProvider>
  )
}
