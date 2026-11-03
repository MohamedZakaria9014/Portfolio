import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: isGithubActions ? "/Portfolio" : "",
  assetPrefix: isGithubActions ? "/Portfolio/" : "",

  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? "/Portfolio" : "",
  },
};

export default function config(phase) {
  return phase === PHASE_DEVELOPMENT_SERVER
    ? { ...nextConfig, distDir: '.next-dev' }
    : nextConfig;
}
