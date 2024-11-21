'use client';

import { Button } from '@template/ui/components/button';
import { ExperienceEditorCanvas } from './experience-editor-canvas';
import { DragNDropContext } from '@template/ui/components/drag-n-drop';
import { SidebarInset, SidebarProvider } from '@template/ui/components/sidebar';
import { ExperienceEditorSection } from './components/experience-editor-section';
import { ExperienceEditorStructureSidebar } from './experience-editor-structure-sidebar';
import { ExperienceEditorComponentWrapper } from './experience-editor-component-wrapper';

export interface ExperienceEditorProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ExperienceEditor = ({ className }: ExperienceEditorProps) => {
  return (
    <DragNDropContext>
      <SidebarProvider>
        <ExperienceEditorStructureSidebar />

        <SidebarInset>
          <ExperienceEditorCanvas>
            <ExperienceEditorComponentWrapper
              component={{ type: 'button', label: 'Button' }}
            >
              <Button>test</Button>
            </ExperienceEditorComponentWrapper>

            <ExperienceEditorComponentWrapper
              component={{ type: 'section', label: 'section' }}
            >
              <ExperienceEditorSection />
            </ExperienceEditorComponentWrapper>
          </ExperienceEditorCanvas>
        </SidebarInset>
      </SidebarProvider>
    </DragNDropContext>
  );
};
