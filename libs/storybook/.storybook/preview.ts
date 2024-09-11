// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import type { Preview } from '@storybook/nextjs';

const preview = {
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
