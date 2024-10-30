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
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
