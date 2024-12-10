export interface TCmsCommand {
  undo: () => void;
  execute: () => void;
}

export interface TCmsComponent {
  id: string;
  type: string;
  label: string;
  icon?: string;
  parentId?: string;
  isDeleted?: boolean;
  description?: string;
  childrenId?: string[];
  props?: Record<string, unknown>;
}

export type TCmsComponentTree = Record<string, TCmsComponent>;

export interface TCmsComponentCategory {
  value: string;
  label: string;
  icon?: string;
  placeholder?: string;
  components: TCmsComponent[];
  subCategories?: TCmsComponentCategory[];
}
