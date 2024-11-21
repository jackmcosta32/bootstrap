import { cn } from '@template/ui/utils/cn';

const DEVICE_TYPES_MAP = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
} as const;

export interface ExperienceEditorCanvasProps
  extends React.HTMLAttributes<HTMLDivElement> {
  device?: (typeof DEVICE_TYPES_MAP)[keyof typeof DEVICE_TYPES_MAP];
}

export const ExperienceEditorCanvas = ({
  device = DEVICE_TYPES_MAP.DESKTOP,
  children,
  className,
}: ExperienceEditorCanvasProps) => {
  return (
    <div
      className={cn(
        'w-full h-full relative flex justify-center items-center border border-border overflow-hidden rounded-lg bg-foreground/5',
        className
      )}
    >
      <div
        data-device={device}
        className="w-full h-full bg-background data-[device='mobile']:max-w-screen-sm data-[device='tablet']:max-w-screen-lg"
      >
        {children}
      </div>
    </div>
  );
};
