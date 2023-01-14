import { faker } from '@faker-js/faker';
import { HttpPostParams } from '../protocols/http';

export const mockPostRequest = (): HttpPostParams<object> => ({
  url: faker.internet.url(),
  body: JSON.parse(faker.datatype.json()),
});
