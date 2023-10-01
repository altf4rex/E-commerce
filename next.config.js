/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    domains: ['ecom-branch.pockethost.io'], 
    imageSizes: [16, 32, 48, 64],
    loader: 'default', 
    path: '/api/files/products/', 
  },
}