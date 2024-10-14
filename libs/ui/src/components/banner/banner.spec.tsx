import { fireEvent, render, screen } from '@testing-library/react';
import { ONE_DAY } from '@/utils/constants';
import { Banner, type BannerProps } from './banner';

const testId = 'banner';

const makeSut = (props?: Partial<BannerProps>) =>
  render(<Banner {...props} data-testid={testId} />);

describe('Component - Banner', () => {
  it('should display its child contents', () => {
    const children = 'some text';

    makeSut({ children });

    expect(screen.queryByText(children)).toBeInTheDocument();
  });

  describe('when the closable prop is set to true...', () => {
    const onCloseMock = jest.fn();

    beforeEach(() => {
      onCloseMock.mockClear();

      makeSut({ closable: true, onClose: onCloseMock });
    });

    it('should make the close button visible', () => {
      expect(
        screen.queryByRole('button', { name: 'Close' })
      ).toBeInTheDocument();
    });

    describe('...and the user clicks the close button...', () => {
      it('should execute the on close callback', () => {
        const closeButton = screen.queryByRole('button', {
          name: 'Close',
        });

        fireEvent.click(closeButton);

        expect(onCloseMock).toHaveBeenCalled();
      });

      it('should hide the banner', () => {
        const closeButton = screen.queryByRole('button', {
          name: 'Close',
        });

        fireEvent.click(closeButton);

        expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
      });
    });
  });

  describe('when the start date prop is set...', () => {
    describe('...and the current date is after the specified start date...', () => {
      beforeEach(() => {
        const startDate = Date.now() - ONE_DAY;

        makeSut({ startDate });
      });

      it('should display the banner component', () => {
        expect(screen.queryByTestId(testId)).toBeInTheDocument();
      });
    });

    describe('...and the current date is before the specified start date...', () => {
      beforeEach(() => {
        const startDate = Date.now() + ONE_DAY;

        makeSut({ startDate });
      });

      it('should hide the banner component', () => {
        expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
      });
    });
  });

  describe('when the end date prop is set...', () => {
    describe('...and the current date is after the specified end date...', () => {
      beforeEach(() => {
        const endDate = Date.now() - ONE_DAY;

        makeSut({ endDate });
      });

      it('should hide the banner component', () => {
        expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
      });
    });

    describe('...and the current date is before the specified end date...', () => {
      beforeEach(() => {
        const endDate = Date.now() + ONE_DAY;

        makeSut({ endDate });
      });

      it('should display the banner component', () => {
        expect(screen.queryByTestId(testId)).toBeInTheDocument();
      });
    });
  });

  describe('when the href prop is set...', () => {
    const href = '/test';

    beforeEach(() => {
      makeSut({ href });
    });

    it('should render an anchor with the specified href', () => {
      const sut = screen.getByRole('link');

      expect(sut).toHaveAttribute('href', href);
    });
  });
});
