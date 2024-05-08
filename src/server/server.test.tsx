import '@testing-library/jest-dom'

import { makeServer } from './server'

describe('makeServer', () => {
  let server: any

  beforeEach(() => {
    server = makeServer({ environment: 'test' })
  })

  afterEach(() => {
    server.shutdown()
  })

  test('GET /api/users returns paginated user data', async () => {
    const response = await fetch('/api/users?page=1')
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toHaveProperty('meta')
    expect(data).toHaveProperty('users')
    expect(data.meta).toHaveProperty('page')
    expect(data.meta).toHaveProperty('total')
    expect(data.meta).toHaveProperty('totalPages')
    expect(Array.isArray(data.users)).toBe(true)
  })
})
