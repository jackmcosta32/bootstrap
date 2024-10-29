import { cn } from '@template/ui/utils/cn';

export interface AuthLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AuthLayout = ({ className, children }: AuthLayoutProps) => {
  return (
    <div className={cn('w-full min-h-svh', className)}>
      <div className="md:container">
        <div className="overflow-hidden border-border grid md:shadow md:rounded-md lg:grid-cols-2">
          <div className="col-span-1 hidden lg:flex p-4 bg-gray-800 text-white border-r border-border"></div>
          <div className="col-span-1 flex flex-col p-4 bg-background">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
