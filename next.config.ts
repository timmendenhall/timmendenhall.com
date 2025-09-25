import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    devIndicators: false,
    output: isProduction ? 'export' : undefined,
    basePath: process.env.PAGES_BASE_PATH,
    images: { unoptimized: isProduction },
};

export default nextConfig;
