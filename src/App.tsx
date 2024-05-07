import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { MainPageContainer } from './pages/main-page/main-pageContainer'

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <MainPageContainer />
    </QueryClientProvider>
  )
}
