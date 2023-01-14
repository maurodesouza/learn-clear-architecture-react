import { AxiosHttpClient } from './axios-http-client';

import { mockAxios } from '@/infra/test/mock-axios';
import { mockPostRequest } from '@/data/test/mock-http-post-params';

jest.mock('axios');

const makeSut = () => ({
  sut: new AxiosHttpClient(),
  mockedAxios: mockAxios(),
});

describe('AxiosHttpClient', () => {
  it('should call axios with correct values', async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();

    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it('should return the correct status code and body', async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();

    const promise = sut.post(request);
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
