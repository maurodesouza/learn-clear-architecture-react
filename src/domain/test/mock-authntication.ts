import { faker } from '@faker-js/faker';
import { AuthenticationParams } from '@/domain/usecase/authentication';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
