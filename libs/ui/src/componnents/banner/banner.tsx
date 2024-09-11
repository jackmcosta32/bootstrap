'use client';

import { Link } from '../link';
import { X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../button';
import { cn } from '../../utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const bannerVariants = cva(
  'w-full h-20 p-2 font-medium text-primary-foreground',
  {
    variants: {
      variant: {
        default: 'bg-foreground',
        green: 'bg-gradient-to-r from-brand-green-100 to-brand-green-400',
        red: 'bg-gradient-to-r from-[#e06b84] to-[#bd3750]',
        rainbow:
          'bg-gradient-to-r from-action-red from-0% via-action-purple via-50% to-action-green to-100%',
      },
      placement: {
        top: 'top-0 left-0 right-0',
        bottom: 'bottom-0 left-0 right-0',
      },
      position: {
        fixed: 'fixed z-20',
        relative: 'relative',
        sticky: 'sticky z-20',
        absolute: 'absolute z-20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  closable?: boolean;
  href?: string | URL;
  endDate?: string | number | Date;
  startDate?: string | number | Date;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const getIsVisible = (params?: {
  closed?: boolean;
  endDate?: string | number | Date;
  startDate?: string | number | Date;
}) => {
  const { closed, endDate, startDate } = params ?? {};

  if (closed) return false;

  const currentTimestamp = Date.now();

  if (endDate) {
    const parsedEndDate = new Date(endDate);
    const endTimestamp = parsedEndDate.getTime();

    if (Number.isNaN(endTimestamp) || currentTimestamp > endTimestamp) {
      return false;
    }
  }

  if (startDate) {
    const parsedStartDate = new Date(startDate);
    const startTimestamp = parsedStartDate.getTime();

    if (Number.isNaN(startTimestamp) || currentTimestamp < startTimestamp) {
      return false;
    }
  }

  return true;
};

const renderChildren = (params: {
  href?: string | URL;
  children: React.ReactNode;
}) => {
  const { children, href } = params ?? {};

  if (!href) return children;

  return (
    <Link
      href={href}
      size="unset"
      className="w-full h-full text-inherit flex flex-row items-center justify-center"
    >
      {children}
    </Link>
  );
};

export function Banner({
  href,
  endDate,
  variant,
  onClose,
  children,
  startDate,
  className,
  closable,
  placement,
  position,
  ...rest
}: BannerProps) {
  const [closed, setClosed] = useState(false);

  const isVisible = getIsVisible({
    closed,
    endDate,
    startDate,
  });

  const handleOnClose: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setClosed(true);

    if (typeof onClose === 'function') {
      return onClose(event);
    }
  };

  if (!isVisible) return null;

  return (
    <section
      {...rest}
      role="complementary"
      className={cn(
        bannerVariants({ className, variant, placement, position })
      )}
    >
      <div className="relative w-full h-full flex flex-row items-center justify-center md:text-xl lg:text-2xl">
        {renderChildren({ href, children })}

        {closable && (
          <Button
            size="icon"
            variant="ghost"
            aria-label="Close"
            onClick={handleOnClose}
            className="absolute z-10 right-4 rounded-full bg-br"
          >
            <X />
          </Button>
        )}
      </div>
    </section>
  );
}
