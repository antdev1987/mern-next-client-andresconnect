/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
    // GOOGLE_ID: process.env.GOOGLE_ID
  },
  images: {
    domains: ['res.cloudinary.com'],
  },

}

module.exports = nextConfig
