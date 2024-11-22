export interface TExperienceCommand {
  execute(): void;
  undo(): void;
}

export class ExperienceHistoryManager {
  private historyPointer = 0;

  private history: TExperienceCommand[] = [];

  public push(command: TExperienceCommand) {
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

    const nextExperienceCommand = this.history[this.historyPointer];

    nextExperienceCommand.execute();

    this.historyPointer += 1;
  }
}
