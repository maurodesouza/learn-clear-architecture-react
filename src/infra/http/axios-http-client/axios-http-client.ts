import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
} from '@/data/protocols/http';
import axios from 'axios';

export class AxiosHttpClient<T = any, R = any> implements HttpPostClient<T, R> {
  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await axios.post(params.url, params.body);

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
