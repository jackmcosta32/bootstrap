import { cn } from '@template/ui/utils/cn';

export interface DashboardLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const DashboardLayout = ({
  className,
  children,
}: DashboardLayoutProps) => {
  return <div className={cn('', className)}>{children}</div>;
};
