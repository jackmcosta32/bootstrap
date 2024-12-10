import type { TCmsCommand } from '@template/domain/models/cms.model';

export class CmsEditorControls {
  private historyPointer = 0;

  private history: TCmsCommand[] = [];

  public push(command: TCmsCommand) {
    command.execute();

    if (this.historyPointer !== this.history.length) {
      this.history = this.history.splice(this.historyPointer);
    }

    const pointer = this.history.push(command);

    this.historyPointer = pointer;
  }

  public undo() {
    if (this.historyPointer <= 0) return;

    const command = this.history[this.historyPointer - 1];

    command.undo();

    this.historyPointer -= 1;
  }

  public redo() {
    if (this.historyPointer === this.history.length) return;

    const nexTCmsCommand = this.history[this.historyPointer];

    nexTCmsCommand.execute();

    this.historyPointer += 1;
  }
}
