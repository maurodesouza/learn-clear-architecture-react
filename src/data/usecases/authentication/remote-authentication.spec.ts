import { faker } from '@faker-js/faker';
import { mockAuthentication } from '../../../domain/test/mock-authntication';

import { HttpPostClientSpy } from '../../test/mock-http-client';
import { RemoveAuthentication } from './remote-authentication';

type SutTypes = {
  sut: RemoveAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoveAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthntication', () => {
  it('should call http post client with corret url', () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);

    sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });

  it('should call http post client with corret body', () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);

    const authParams = mockAuthentication();

    sut.auth(authParams);
    expect(httpPostClientSpy.body).toBe(authParams);
  });
});
