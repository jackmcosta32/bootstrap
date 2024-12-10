import { CmsComponentTree } from './cms-component-tree';
import { CmsEditorControls } from './cms-editor-controls';

export interface TCmsEditorConstructor {}

export class CmsEditor {
  private controls: CmsEditorControls;
  private componentTree: CmsComponentTree;

  constructor(params: TCmsEditorConstructor) {
    this.controls = new CmsEditorControls();
    this.componentTree = new CmsComponentTree();
  }
}
