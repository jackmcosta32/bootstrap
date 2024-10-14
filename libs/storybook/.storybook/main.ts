import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/nextjs',
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false,
  },
};

export default config;
