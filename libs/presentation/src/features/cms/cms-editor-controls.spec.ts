import { CmsEditorControls } from './cms-editor-controls';
import type { TCmsCommand } from '@template/domain/models/cms.model';

const mockCommand = (params?: Partial<TCmsCommand>): TCmsCommand => ({
  undo: jest.fn(),
  execute: jest.fn(),
  ...params,
});

const makeSut = () => {
  return new CmsEditorControls();
};

describe('Feature - CMS - CmsEditorControls', () => {
  describe('when attempting to push changes to history...', () => {
    it('should execute the command', () => {
      const sut = makeSut();
      const command = mockCommand();

      sut.push(command);

      expect(command.execute).toHaveBeenCalled();
    });

    it('should add changes to the history pool', () => {
      const sut = makeSut();
      const command = mockCommand();

      sut.push(command);

      expect(sut['historyPointer']).toBe(1);
      expect(sut['history']).toContain(command);
    });
  });

  describe('when attempting to undo a previous change...', () => {
    it('should undo the command', () => {
      const sut = makeSut();
      const command = mockCommand();

      sut.push(command);
      sut.undo();

      expect(command.undo).toHaveBeenCalled();
    });

    it('should add changes to the history pool', () => {
      const sut = makeSut();
      const command = mockCommand();

      sut.push(command);
      sut.undo();

      expect(sut['historyPointer']).toBe(0);
      expect(sut['history']).toContain(command);
    });
  });

  describe('when attempting to redo a change...', () => {
    it('should execute the command', () => {
      const sut = makeSut();
      const command = mockCommand();

      sut.push(command);
      sut.undo();
      sut.redo();

      expect(command.execute).toHaveBeenCalledTimes(2);
    });
  });

  describe('when attempting to push changes to the history after undoing previous commands...', () => {
    it('should overwrite the other commands', () => {
      const sut = makeSut();
      const command = mockCommand();

      sut.push(command);
      sut.push(command);
      sut.push(command);
      sut.push(command);
      sut.undo();
      sut.undo();
      sut.push(command);

      expect(sut['history']).toHaveLength(3);
    });
  });
});
