import * as React from 'react';
import { cn } from '../../utils/cn';
import { tv, type VariantProps } from 'tailwind-variants';

const typographyVariants = tv({
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'text-3xl font-semibold tracking-tight',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
      p: 'leading-7',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
      code: 'rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
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
