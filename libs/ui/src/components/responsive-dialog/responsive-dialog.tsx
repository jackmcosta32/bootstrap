'use client';

import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from '../dialog';

import {
  Drawer,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  DrawerContent,
  DrawerDescription,
} from '../drawer';

import type {
  DialogTitleProps,
  DialogCloseProps,
  DialogContentProps,
  DialogTriggerProps,
  DialogDescriptionProps,
} from '@radix-ui/react-dialog';

import { createContext, useContext, useState } from 'react';
import { useMediaQuery } from '../../hooks/use-media-query';

const ResponsiveDialogContext = createContext(false);

const useResponsiveDialogContext = () => useContext(ResponsiveDialogContext);

export interface ResponsiveDialogProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, 'onDrag'> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
  modal?: boolean;
}

const ResponsiveDialog = ({
  children,
  defaultOpen,
  onOpenChange,

  open: controlledOpen,
  ...rest
}: ResponsiveDialogProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [open, setOpen] = useState<boolean>(defaultOpen ?? false);
  const Wrapper = isDesktop ? Dialog : Drawer;

  const handleOnOpenChange = (open: boolean) => {
    setOpen(open);

    if (typeof onOpenChange !== 'function') return;

    onOpenChange(open);
  };

  return (
    <ResponsiveDialogContext.Provider value={isDesktop}>
      <Wrapper
        defaultOpen={defaultOpen}
        open={controlledOpen ?? open}
        onOpenChange={handleOnOpenChange}
        {...rest}
      >
        {children}
      </Wrapper>
    </ResponsiveDialogContext.Provider>
  );
};

const ResponsiveDialogTrigger = ({ children, ...rest }: DialogTriggerProps) => {
  const isDesktop = useResponsiveDialogContext();
  const Trigger = isDesktop ? DialogTrigger : DrawerTrigger;

  return <Trigger {...rest}>{children}</Trigger>;
};

const ResponsiveDialogClose = ({ children, ...rest }: DialogCloseProps) => {
  const isDesktop = useResponsiveDialogContext();
  const Close = isDesktop ? DialogClose : DrawerClose;

  return <Close {...rest}>{children}</Close>;
};

const ResponsiveDialogContent = ({ children, ...rest }: DialogContentProps) => {
  const isDesktop = useResponsiveDialogContext();
  const Content = isDesktop ? DialogContent : DrawerContent;

  return <Content {...rest}>{children}</Content>;
};

const ResponsiveDialogDescription = ({
  children,
  ...rest
}: DialogDescriptionProps) => {
  const isDesktop = useResponsiveDialogContext();
  const Description = isDesktop ? DialogDescription : DrawerDescription;

  return <Description {...rest}>{children}</Description>;
};

const ResponsiveDialogHeader = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  const isDesktop = useResponsiveDialogContext();
  const Header = isDesktop ? DialogHeader : DrawerHeader;

  return <Header {...rest}>{children}</Header>;
};

const ResponsiveDialogTitle = ({ children, ...rest }: DialogTitleProps) => {
  const isDesktop = useResponsiveDialogContext();
  const Title = isDesktop ? DialogTitle : DrawerTitle;

  return <Title {...rest}>{children}</Title>;
};

const ResponsiveDialogFooter = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  const isDesktop = useResponsiveDialogContext();
  const Footer = isDesktop ? DialogFooter : DrawerFooter;

  return <Footer {...rest}>{children}</Footer>;
};

export {
  ResponsiveDialog,
  ResponsiveDialogTrigger,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogFooter,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
};
