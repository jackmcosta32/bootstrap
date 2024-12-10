import { BaseMocker } from './base.mocker';
import type { TCmsComponent } from '@template/domain/models/cms.model';

export class CmsComponentMocker extends BaseMocker<TCmsComponent> {
  public override mockOne(params?: Partial<TCmsComponent>): TCmsComponent {
    const CmsComponent = {
      id: this.factory.string.uuid(),
      type: this.factory.lorem.word(),
      label: this.factory.lorem.word(),
    } as TCmsComponent;

    return Object.assign(CmsComponent, params);
  }
}
