import {
  ExperienceComponentTree,
  type TExperienceComponentTreeConstructor,
} from './experience-component-tree';
import { ExperienceComponentMocker } from '@template/test/mockers/experience-component.mocker';

const experienceComponentMocker = new ExperienceComponentMocker();

const makeSut = (params?: TExperienceComponentTreeConstructor) => {
  return new ExperienceComponentTree(params);
};

describe('Features - CMS - ExperienceComponentTree', () => {
  describe('when attempting to add a new component...', () => {
    it('should be able to add new components to the component tree', () => {
      const sut = makeSut();

      const component = experienceComponentMocker.mockOne();

      sut.addComponent(component.id, component);

      expect(sut['componentTree']).toHaveProperty(component.id);
    });

    it('should be able to add nested components to the component tree', () => {
      const sut = makeSut();

      const parentComponent = experienceComponentMocker.mockOne();
      const childComponent = experienceComponentMocker.mockOne();

      sut.addComponent(parentComponent.id, parentComponent);
      sut.addComponent(childComponent.id, childComponent, parentComponent.id);

      expect(childComponent.parentId).toBe(parentComponent.id);
      expect(parentComponent.childrenId).toContain(childComponent.id);
    });
  });

  describe('when attempting to delete a component...', () => {
    it('should be able to delete a component from the component tree', () => {
      const sut = makeSut();

      const component = experienceComponentMocker.mockOne();

      sut.addComponent(component.id, component);
      sut.deleteComponent(component.id);

      expect(sut['componentTree']).not.toHaveProperty(component.id);
    });

    describe('...and this component has children...', () => {
      it('should delete its children', () => {
        const sut = makeSut();

        const parentComponent = experienceComponentMocker.mockOne();
        const firstChildComponent = experienceComponentMocker.mockOne();
        const secondChildComponent = experienceComponentMocker.mockOne();

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
        experienceComponentMocker.mockMany(3);

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
