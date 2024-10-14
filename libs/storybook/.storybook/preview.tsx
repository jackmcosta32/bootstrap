import '@viome/ui/styles/global.scss';
import React, { useEffect } from 'react';
import { sans, mono } from '@viome/ui/fonts';
import type { Decorator, Preview } from '@storybook/react';

const fontDecorator: Decorator = (Story) => {
  useEffect(() => {
    const documentClasses = document.documentElement.classList;

    documentClasses.add(sans.variable);
    documentClasses.add(mono.variable);
  }, []);

  return <Story />;
};

export const decorators: Decorator[] = [fontDecorator];

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default preview;
