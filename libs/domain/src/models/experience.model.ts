export interface TExperienceComponent {
  id: string;
  type: string;
  label: string;
  icon?: string;
  parentId?: string;
  description?: string;
  childrenId?: string[];
  props?: Record<string, unknown>;
}

export type TExperienceComponentTree = Record<string, TExperienceComponent>;

export interface TExperienceComponentCategory {
  value: string;
  label: string;
  icon?: string;
  placeholder?: string;
  components: TExperienceComponent[];
  subCategories?: TExperienceComponentCategory[];
}
