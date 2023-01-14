import { AxiosHttpClient } from './axios-http-client';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import { HttpPostParams, HttpStatusCode } from '@/data/protocols/http';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

const mockPostRequest = (): HttpPostParams<object> => ({
  url: faker.internet.url(),
  body: JSON.parse(faker.datatype.json()),
});

describe('AxiosHttpClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call axios with correct values', async () => {
    const request = mockPostRequest();
    const sut = makeSut();

    mockedAxios.post.mockResolvedValue({});

    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it('should return the correct status code and body', async () => {
    const request = mockPostRequest();
    const sut = makeSut();

    const response = {
      statusCode: HttpStatusCode.ok,
      body: JSON.parse(faker.datatype.json()),
    };

    mockedAxios.post.mockResolvedValue({
      data: response.body,
      status: response.statusCode,
    });

    const httpResponse = await sut.post(request);
    expect(httpResponse).toEqual(response);
  });
});
