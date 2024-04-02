import { faker } from '@faker-js/faker'

export const LOGIN_MOCK_RESPONSE = {
  data: {
    id: faker.database.mongodbObjectId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    profileImage: faker.image.avatar(),
  },
}
