import { cn } from '../../utils/cn';
import { CircularProgress } from '../circular-progress';
import loaderStyles from './loader.module.scss';

export interface LoadingComponentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  size?: 'sm' | 'md' | 'lg';
}

export interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    LoadingComponentProps {
  loading?: boolean;
  backdrop?: boolean;
  keepMounted?: boolean;
  loadingComponent?: React.FC<Partial<LoadingComponentProps>>;
}

export function Loader({
  size,
  className,
  loadingComponent,
  loading = true,
  backdrop = false,
  keepMounted = true,
  ...rest
}: LoaderProps) {
  const shouldHide = !loading;
  const shouldUnmount = !keepMounted && !loading;
  const Component = loadingComponent ?? CircularProgress;

  if (shouldUnmount) return null;

  return (
    <div
      {...rest}
      aria-live="polite"
      aria-busy={loading}
      data-hidden={shouldHide}
      data-backdrop={backdrop}
      className={cn(loaderStyles.loader, className)}
    >
      <Component size={size} indeterminate={loading} />
    </div>
  );
}
