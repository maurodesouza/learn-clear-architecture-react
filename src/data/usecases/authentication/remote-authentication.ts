import { AccountModel } from '@/domain/models';
import { AuthenticationParams } from '@/domain/usecase';
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http';

class RemoveAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const args = {
      url: this.url,
      body: params,
    };

    const response = await this.httpPostClient.post(args);

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body!;

      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();

      default:
        throw new UnexpectedError();
    }
  }
}

export { RemoveAuthentication };
