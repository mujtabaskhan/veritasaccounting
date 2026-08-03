/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "ctmirror-images.s3.amazonaws.com",
      "cdn.shopify.com",
      "via.placeholder.com",
      "cool-ant-118.convex.cloud",
      "cool-ant-118.convex.site",
      "stoic-crab-489.convex.cloud",
      "hushed-ox-732.convex.cloud",
      "hushed-ox-732.convex.site",
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
