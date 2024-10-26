import * as React from 'react';
import { cn } from '../../utils/cn';
import { tv, type VariantProps } from 'tailwind-variants';

const typographyVariants = tv({
  variants: {
    variant: {
      h1: 'typography-h1',
      h2: 'typography-h2',
      h3: 'typography-h3',
      h4: 'typography-h4',
      p: 'typography-p',
      lead: 'typography-lead',
      large: 'typography-large',
      small: 'typography-small',
      muted: 'typography-muted',
      code: 'typography-code',
    },
    fontFamily: {
      sans: 'font-sans',
      mono: 'font-mono',
    },
    fontWeight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-semibold',
    },
    fontStyle: {
      default: '',
      italic: 'italic',
      underlined: 'underline',
    },
  },
  defaultVariants: {
    variant: 'p',
    fontFamily: 'mono',
  },
});

export interface BaseTypographyProps
  extends React.HTMLAttributes<HTMLBaseElement>,
    VariantProps<typeof typographyVariants> {
  children?: React.ReactNode;
}

export type TypographyProps<
  TComponent extends keyof HTMLElementTagNameMap | React.ElementType = 'span'
> = (TComponent extends keyof HTMLElementTagNameMap
  ? Partial<Omit<HTMLElementTagNameMap[TComponent], 'children'>>
  : React.ComponentPropsWithoutRef<TComponent>) &
  BaseTypographyProps & {
    as?: TComponent;
  };

export function Typography<
  TComponent extends keyof HTMLElementTagNameMap | React.ElementType
>({
  as,
  variant,
  children,
  className,
  fontStyle,
  fontFamily,
  fontWeight,
  ...rest
}: TypographyProps<TComponent>) {
  const Wrapper = as ?? 'span';

  if (
    !React.isValidElement(Wrapper) &&
    !['function', 'string'].includes(typeof Wrapper)
  ) {
    return null;
  }

  return (
    <Wrapper
      className={cn(
        typographyVariants({
          variant,
          fontStyle,
          fontFamily,
          fontWeight,
          className,
        })
      )}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}
