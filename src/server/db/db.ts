import { faker, simpleFaker } from '@faker-js/faker'

import { DataType, UserTypes } from '../userTypes'

export const getDataFromBD = () => {
  const numberOfElements = 25 // Количество элементов
  const numberOfProperties = 3000 // Количество свойств

  const data: DataType = { users: [] }

  for (let i = 0; i < numberOfElements; i++) {
    const element = {} as UserTypes

    element.status = faker.helpers.arrayElement(['active', 'inactive'])
    element.firstName = faker.person.firstName()
    element.lastName = faker.person.lastName()
    element.company = faker.company.name()
    element.phone = faker.phone.number()
    for (let j = 0; j < numberOfProperties; j++) {
      element[`property_${j}`] = faker.lorem.word()
    }
    element['id'] = simpleFaker.string.uuid()

    data.users.push(element)
  }

  return data
}
