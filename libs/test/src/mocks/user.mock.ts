import { BaseMock } from './base.mock';
import type { TUser } from '@template/domain/models/user.model';

export class UserMock extends BaseMock<TUser> {
  public override mockOne(params?: Partial<TUser>): TUser {
    const user = {
      lastName: this.factory.person.lastName(),
      firstName: this.factory.person.firstName(),
      username: this.factory.internet.userName(),
    };

    return Object.assign(user, params);
  }
}
