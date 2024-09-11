// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import '@viome/ui/styles/global.scss';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  // ...rest of preview
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
};

export default preview;
