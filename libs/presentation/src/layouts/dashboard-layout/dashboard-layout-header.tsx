import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@template/ui/components/breadcrumb';
import { cn } from '@template/ui/utils/cn';
import { Separator } from '@template/ui/components/separator';
import { SidebarTrigger } from '@template/ui/components/sidebar';

export interface DashboardLayoutHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardLayoutHeader({
  className,
}: DashboardLayoutHeaderProps) {
  return (
    <header className={cn('flex h-16 shrink-0 items-center gap-2', className)}>
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">
                Building Your Application
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
