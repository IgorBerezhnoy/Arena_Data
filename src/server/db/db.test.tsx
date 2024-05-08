import '@testing-library/jest-dom'

import { getDataFromBD } from './db'

describe('getDataFromBD', () => {
  test('getDataFromBD returns data object with correct structure and specified number of elements and properties', () => {
    const data = getDataFromBD()

    expect(data).toHaveProperty('users')
    expect(Array.isArray(data.users)).toBe(true)

    expect(data.users).toHaveLength(25)

    data.users.forEach(user => {
      expect(user).toHaveProperty('status')
      expect(user).toHaveProperty('firstName')
      expect(user).toHaveProperty('lastName')
      expect(user).toHaveProperty('company')
      expect(user).toHaveProperty('phone')
      expect(user).toHaveProperty('id')

      expect(Object.keys(user).length).toBe(3006)

      expect(user.status).toMatch(/active|inactive/)

      expect(user.id).toMatch(/[a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}/)
    })
  })
})
