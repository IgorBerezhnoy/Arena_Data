import { faker } from '@faker-js/faker'

const numberOfElements = 2 // Количество элементов
const numberOfProperties = 10 // Количество свойств

export const data: ElementType[] = []

for (let i = 0; i < numberOfElements; i++) {
  const element: ElementType = {}

  for (let j = 0; j < numberOfProperties; j++) {
    element[`property_${j}`] = faker.lorem.word()
  }
  data.push(element)
}

type ElementType = { [key: string]: string }
