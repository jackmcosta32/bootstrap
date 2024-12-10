import type {
  TCmsComponent,
  TCmsComponentTree,
} from '@template/domain/models/cms.model';

const ROOT_NODE_ID = 'root';

export interface TCmsComponentTreeConstructor {
  componentTree?: TCmsComponentTree;
}

export class CmsComponentTree {
  private componentTree: TCmsComponentTree;

  constructor(params?: TCmsComponentTreeConstructor) {
    if (params?.componentTree) {
      this.componentTree = params?.componentTree;

      return;
    }

    const rootNode: TCmsComponent = {
      type: 'root',
      label: 'root',
      id: ROOT_NODE_ID,
    };

    this.componentTree = { [ROOT_NODE_ID]: rootNode };
  }

  public restoreComponent(id: string) {
    this.componentTree[id].isDeleted = false;
  }

  public deleteComponent(id: string) {
    this.componentTree[id].isDeleted = true;
  }

  public hardDeleteComponent(id: string) {
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
    component: TCmsComponent,
    parentId?: string,
    order?: number
  ) {
    this.componentTree[id] = component;
    this.moveComponent(id, parentId ?? ROOT_NODE_ID, order);
  }

  private viewNode(id: string) {
    const currentNode = this.componentTree[id]
    
    if (currentNode.isDeleted) return;

    if (!currentNode.childrenId) return currentNode;

    const 

    rootNode.childrenId?.reduce((acc, childId) => {
      const child = this.componentTree[childId]

      if (child.isDeleted) return acc
      
      
    }, [])
  }
}
