import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/projects/custom-32-bit-cpu-isa',
                destination: '/projects/custom-16-bit-cpu-isa',
                permanent: true
            }
        ]
    }
}

export default nextConfig
