import type {
  TExperienceComponent,
  TExperienceComponentTree,
} from '@template/domain/models/experience.model';

export interface TExperienceComponentTreeConstructor {
  componentTree?: TExperienceComponentTree;
}

export class ExperienceComponentTree {
  private componentTree: TExperienceComponentTree;

  constructor(params?: TExperienceComponentTreeConstructor) {
    this.componentTree = params?.componentTree ?? {};
  }

  public deleteComponent(id: string) {
    const componentNode = this.componentTree[id];

    if (componentNode.childrenId) {
      componentNode.childrenId.forEach((childId) =>
        this.deleteComponent(childId)
      );
    }

    if (componentNode.parentId) {
      const parentNode = this.componentTree[componentNode.parentId];

      parentNode.childrenId = parentNode.childrenId?.filter(
        (childId) => childId !== id
      );
    }

    delete this.componentTree[id];
  }

  public moveComponent(id: string, parentId?: string, order?: number) {
    const currentNode = this.componentTree[id];

    if (currentNode.parentId) {
      const currentParentNode = this.componentTree[currentNode.parentId];

      currentParentNode.childrenId = currentParentNode.childrenId?.filter(
        (childId) => childId !== id
      );
    }

    if (!parentId) return;

    const newParentNode = this.componentTree[parentId];

    if (!newParentNode.childrenId) {
      newParentNode.childrenId = [id];
    } else if (typeof order !== 'number') {
      newParentNode.childrenId.push(id);
    } else {
      newParentNode.childrenId.splice(order, 0);
    }

    currentNode.parentId = newParentNode.id;
  }

  public addComponent(
    id: string,
    component: TExperienceComponent,
    parentId?: string,
    order?: number
  ) {
    this.componentTree[id] = component;
    this.moveComponent(id, parentId, order);
  }
}
