import { BaseMocker } from './base.mocker';
import type { TExperienceComponent } from '@template/domain/models/experience.model';

export class ExperienceComponentMocker extends BaseMocker<TExperienceComponent> {
  public override mockOne(
    params?: Partial<TExperienceComponent>
  ): TExperienceComponent {
    const experienceComponent = {
      id: this.factory.string.uuid(),
      type: this.factory.lorem.word(),
      label: this.factory.lorem.word(),
    } as TExperienceComponent;

    return Object.assign(experienceComponent, params);
  }
}
