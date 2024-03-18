import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
export default defineConfig({
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssCodeSplit: false,
    lib: {
      entry: './src/index.tsx',
      formats: ['es'],
      fileName: 'main',
    },
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
      external: ['react', 'react-dom', 'antd', '@ant-design/icons'],
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
      localsConvention: 'camelCase',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: [{ find: /^~/, replacement: './node_modules/' }],
  },
});
