/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.rareblocks.xyz', // The domain where your images are hosted
            pathname: '/**', // Allows all images from this domain
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '/**',
        },
        ],
      },
};

export default nextConfig;
