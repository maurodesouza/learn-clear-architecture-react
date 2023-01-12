import { AuthenticationParams } from '../../../domain/usecase/authentication';
import { HttpPostClient } from '../../protocols/http/http-post-client';

class RemoveAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const args = {
      url: this.url,
      body: params,
    };

    await this.httpPostClient.post(args);
  }
}

export { RemoveAuthentication };
