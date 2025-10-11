/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Disable trailing slashes
  trailingSlash: false,
  // Disable x-powered-by header
  poweredByHeader: false,
  // Output file tracing root
  outputFileTracingRoot: process.cwd(),
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // Remove React properties for smaller bundle
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  // Target modern browsers only (no legacy JavaScript)
  modularizeImports: {
    '@phosphor-icons/react': {
      transform: '@phosphor-icons/react/dist/{{member}}',
    },
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        usedExports: true,
        sideEffects: false,
      };
    }
    return config;
  },
  // React strict mode for better performance
  reactStrictMode: true,
  // Exclude old Vite files from build
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-icons'],
    // Reduce JavaScript payload
    serverComponentsExternalPackages: ['sharp'],
  },
  // Additional performance optimizations
  compress: true,
}

export default nextConfig
