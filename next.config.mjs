/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

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

export default nextConfig;
