import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    distPath: {
      root: 'build',
    },
  },

  html: {
    title: 'Lesta games ship gallery',
    template: './public/index.html',
  },
});
