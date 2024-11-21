import { BaseMocker } from './base.mocker';
import type { TUser } from '@template/domain/models/user.model';

export class UserMocker extends BaseMocker<TUser> {
  public override mockOne(params?: Partial<TUser>): TUser {
    const user = {
      lastName: this.factory.person.lastName(),
      firstName: this.factory.person.firstName(),
      username: this.factory.internet.userName(),
    } as TUser;

    return Object.assign(user, params);
  }
}
