import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
        domains: ['ecommerce.routemisr.com']
    }
};

export default withFlowbiteReact(nextConfig);