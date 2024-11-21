import {
  Sidebar,
  SidebarMenu,
  SidebarHeader,
  SidebarContent,
  SidebarMenuItem,
} from '@template/ui/components/sidebar';

import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from '@template/ui/components/tabs';

import { ExperienceEditorComponentsMenu } from './experience-editor-component-menu';
import type { TExperienceComponentCategory } from '@template/domain/models/experience.model';

export interface ExperienceEditorStructureSidebarProps {}

const EDITOR_CATEGORIES = [
  {
    value: 'structure',
    label: 'Structure',
    components: [
      { type: 'section', label: 'Section' },
      { type: 'container', label: 'Container' },
      { type: 'columns', label: 'Columns' },
    ],
  },
  {
    value: 'basics',
    label: 'Basics',
    components: [
      { type: 'button', label: 'Button' },
      { type: 'heading', label: 'Heading' },
      { type: 'image', label: 'Image' },
      { type: 'rich-text', label: 'Rich Text' },
      { type: 'text', label: 'Text' },
      { type: 'divider', label: 'Divider' },
    ],
  },
  {
    value: 'design-system',
    label: 'Design System',
    components: [
      { type: 'section', label: 'Section' },
      { type: 'container', label: 'Container' },
      { type: 'columns', label: 'Columns' },
    ],
  },
  {
    value: 'patterns',
    label: 'Patterns',
    components: [
      { type: 'section', label: 'Section' },
      { type: 'container', label: 'Container' },
      { type: 'columns', label: 'Columns' },
    ],
  },
] as TExperienceComponentCategory[];

const MENU_MAP = {
  COMPONENTS: {
    value: 'components',
    label: 'Components',
    content: <ExperienceEditorComponentsMenu categories={EDITOR_CATEGORIES} />,
  },
  LAYERS: {
    value: 'layers',
    label: 'Layers',
    content: null,
  },
  SETTINGS: {
    value: 'settings',
    label: 'Settings',
    content: null,
  },
} as const;

const MENU_ITEMS = Object.values(MENU_MAP);

const SidebarTabTriggers = MENU_ITEMS.map(({ label, value }) => (
  <TabsTrigger key={value} value={value}>
    {label}
  </TabsTrigger>
));

const SidebarTabContents = MENU_ITEMS.map(({ content, value }) => (
  <TabsContent key={value} value={value}>
    {content}
  </TabsContent>
));

export function ExperienceEditorStructureSidebar(
  props: ExperienceEditorStructureSidebarProps
) {
  return (
    <Sidebar variant="inset" {...props}>
      <Tabs defaultValue={MENU_MAP.COMPONENTS.value}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <TabsList className="grid w-full grid-cols-3">
                {SidebarTabTriggers}
              </TabsList>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>{SidebarTabContents}</SidebarContent>
      </Tabs>
    </Sidebar>
  );
}
