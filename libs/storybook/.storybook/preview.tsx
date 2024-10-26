import '@template/ui/styles/global.scss';
import React, { useEffect } from 'react';
import '@template/presentation/configs/i18n';
import { sans, mono } from '@template/ui/fonts';
import '@template/presentation/styles/global.scss';
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
