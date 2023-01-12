import { HttpPostClientSpy } from '../../test/mock-http-client';
import { RemoveAuthentication } from './remote-authentication';

type SutTypes = {
  sut: RemoveAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url = 'any-url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoveAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthntication', () => {
  it('should call http client with corret url', () => {
    const url = 'other-url';
    const { sut, httpPostClientSpy } = makeSut(url);

    sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
