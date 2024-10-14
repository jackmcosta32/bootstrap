import * as React from 'react';
import { cn } from '../../utils/cn';
import { tv, type VariantProps } from 'tailwind-variants';

const typographyVariants = tv({
  variants: {
    variant: {
      display1:
        'lg:text-[3.75rem] md:text-[3.5rem] text-[2.5rem] leading-tighter font-light',
      display2:
        'lg:text-[3rem] md:text-[2.5rem] text-[2.25rem] leading-tighter font-light',
      h1: 'lg:text-[2.25rem] md:text-[2rem] text-[1.75rem] leading-tight font-light',
      h2: 'lg:text-[1.875rem] md:text-[1.75rem] text-[1.5rem] leading-tight font-light',
      h3: 'md:text-[1.5rem] text-[1.375rem] leading-snug font-light',
      h4: 'text-[1.25rem] leading-snug font-light',
      paragraph1: 'md:text-[1.125rem] text-[1rem] leading-normal font-light',
      paragraph2: 'md:text-[1rem] text-[0.875rem] leading-normal font-light',
      label1: 'md:text-[1.125rem] text-[1rem] leading-normal font-light',
      label2: 'md:text-[1rem] text-[0.875rem] leading-normal font-light',
      caption1: 'text-[0.875rem] leading-normal font-normal',
      caption2: 'text-[0.75rem] leading-normal font-normal',
      cta1: 'text-[1rem] leading-normal font-medium',
      cta2: 'text-[0.875rem] leading-normal font-medium',
      cta3: 'text-[0.875rem] underline leading-normal font-medium',
    },
    fontFamily: {
      sans: 'font-sans',
      mono: 'font-mono',
      serif: 'font-serif',
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
    letterSpacing: {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest',
    },
  },
  defaultVariants: {
    fontFamily: 'mono',
    variant: 'paragraph1',
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
  letterSpacing,
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
          letterSpacing,
          className,
        })
      )}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}
