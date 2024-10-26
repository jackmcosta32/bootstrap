import { faker } from '@faker-js/faker';

type TRange = {
  max?: number;
  min?: number;
};

export abstract class BaseMock<TModel> {
  protected factory = faker;

  protected randomEntry<TValue>(
    value: Array<TValue> | Record<string, TValue>
  ): TValue {
    const arrayValue = Array.isArray(value) ? value : Object.values(value);

    const randomIndex = this.factory.number.int({
      max: arrayValue.length - 1,
      min: 0,
    });

    const randomEntry = arrayValue[randomIndex];

    return randomEntry;
  }

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
