import { faker } from '@faker-js/faker';

type TRange = {
  max?: number;
  min?: number;
};

export abstract class BaseMocker<TModel> {
  protected factory = faker;

  public mockMany(
    quantity?: number | TRange,
    params?: Partial<TModel>
  ): TModel[] {
    let length: number;

    switch (typeof quantity) {
      case 'number':
        length = quantity;
        break;

      case 'object':
        length = this.factory.number.int(quantity);
        break;

      default:
        length = 1;
        break;
    }

    return Array.from({ length }).map(() => this.mockOne(params));
  }

  public abstract mockOne(params?: Partial<TModel>): TModel;
}
