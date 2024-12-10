import {
  CmsComponentTree,
  type TCmsComponentTreeConstructor,
} from './cms-component-tree';
import { CmsComponentMocker } from '@template/test/mockers/cms-component.mocker';

const cmsComponentMocker = new CmsComponentMocker();

const makeSut = (params?: TCmsComponentTreeConstructor) => {
  return new CmsComponentTree(params);
};

describe('Features - CMS - CmsComponentTree', () => {
  describe('when attempting to add a new component...', () => {
    it('should be able to add new components to the component tree', () => {
      const sut = makeSut();

      const component = cmsComponentMocker.mockOne();

      sut.addComponent(component.id, component);

      expect(sut['componentTree']).toHaveProperty(component.id);
    });

    it('should be able to add nested components to the component tree', () => {
      const sut = makeSut();

      const parentComponent = cmsComponentMocker.mockOne();
      const childComponent = cmsComponentMocker.mockOne();

      sut.addComponent(parentComponent.id, parentComponent);
      sut.addComponent(childComponent.id, childComponent, parentComponent.id);

      expect(childComponent.parentId).toBe(parentComponent.id);
      expect(parentComponent.childrenId).toContain(childComponent.id);
    });
  });

  describe('when attempting to delete a component...', () => {
    it('should be able to delete a component from the component tree', () => {
      const sut = makeSut();

      const component = cmsComponentMocker.mockOne();

      sut.addComponent(component.id, component);
      sut.deleteComponent(component.id);

      expect(sut['componentTree']).not.toHaveProperty(component.id);
    });

    describe('...and this component has children...', () => {
      it('should delete its children', () => {
        const sut = makeSut();

        const parentComponent = cmsComponentMocker.mockOne();
        const firstChildComponent = cmsComponentMocker.mockOne();
        const secondChildComponent = cmsComponentMocker.mockOne();

        sut.addComponent(parentComponent.id, parentComponent);

        sut.addComponent(
          firstChildComponent.id,
          firstChildComponent,
          parentComponent.id
        );

        sut.addComponent(
          secondChildComponent.id,
          secondChildComponent,
          parentComponent.id
        );

        sut.deleteComponent(parentComponent.id);

        expect(sut['componentTree']).not.toHaveProperty(parentComponent.id);
        expect(sut['componentTree']).not.toHaveProperty(firstChildComponent.id);
        expect(sut['componentTree']).not.toHaveProperty(
          secondChildComponent.id
        );
      });
    });
  });

  describe('when attempting to move a component...', () => {
    it('should be able to move its children from a parent node to another', () => {
      const sut = makeSut();

      const [childComponent, firstParentComponent, secondParentComponent] =
        cmsComponentMocker.mockMany(3);

      sut.addComponent(firstParentComponent.id, firstParentComponent);

      sut.addComponent(secondParentComponent.id, secondParentComponent);

      sut.addComponent(
        childComponent.id,
        childComponent,
        firstParentComponent.id
      );

      sut.moveComponent(childComponent.id, secondParentComponent.id);

      console.log(sut['componentTree']);

      expect(childComponent.parentId).toBe(secondParentComponent.id);
      expect(firstParentComponent.childrenId).not.toContain(childComponent.id);
      expect(secondParentComponent.childrenId).toContain(childComponent.id);
    });
  });
});
