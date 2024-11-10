import { DashboardLayoutHeader } from './dashboard-layout-header';
import { DashboardLayoutAppSidebar } from './dashboard-layout-app-sidebar';
import { SidebarInset, SidebarProvider } from '@template/ui/components/sidebar';

export interface DashboardLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <DashboardLayoutAppSidebar />
      <SidebarInset>
        <DashboardLayoutHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};
