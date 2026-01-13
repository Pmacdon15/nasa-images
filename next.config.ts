import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	typedRoutes: true,
	cacheComponents: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images-assets.nasa.gov',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
