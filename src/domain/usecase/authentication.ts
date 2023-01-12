import { AccountModel } from '../models/account-model';

type AuthParams = {
  email: string;
  password: string;
};

interface Authentication {
  auth(params: AuthParams): Promise<AccountModel>;
}

export { Authentication };
