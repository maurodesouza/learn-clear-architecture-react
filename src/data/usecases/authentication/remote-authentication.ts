import { AuthenticationParams } from '@/domain/usecase/authentication';
import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error';
import { UnexpectedError } from '@/domain/errors/unexpected-erro';

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

    const response = await this.httpPostClient.post(args);

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        break;

      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();

      default:
        throw new UnexpectedError();
    }
  }
}

export { RemoveAuthentication };
