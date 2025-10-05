import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
        domains: ['ecommerce.routemisr.com']
    },
    async rewrites() {
        return [
            {
                // 1. Local path your client code will use
                source: '/api/auth/v1/:path*',

                // 2. The external destination (the actual API server)
                // Next.js server makes this request, bypassing CORS
                destination: 'https://ecommerce.routemisr.com/api/v1/:path*',
            },
        ];
    },

};

export default withFlowbiteReact(nextConfig);