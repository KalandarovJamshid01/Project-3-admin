import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins.push(new NodePolyfillPlugin());

    // Exclude node_modules from being bundled, handle 'node:' scheme
    if (isServer) {
      config.externals = [
        nodeExternals({
          allowlist: [/^node:/],
        }),
      ];
    }

    // Handle 'node:' scheme for Webpack 5
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'node:crypto': 'crypto-browserify',
        'node:fs': 'browserify-fs',
        'node:path': 'path-browserify',
        'node:os': 'os-browserify/browser',
      },
    };

    return config;
  },
};

// Setup dev platform for Cloudflare
const setupDevelopmentPlatform = async () => {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform({
      persist: true,
    });
  }
};

setupDevelopmentPlatform();

export default nextConfig;
