/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "/api/stilo/editor": ["./node_modules/@stilodev/editor/dist/editor-v1.js"],
  },
};

export default nextConfig;
