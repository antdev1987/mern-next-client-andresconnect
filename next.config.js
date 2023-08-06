/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: false,

  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY
  },
  images: {
    domains: ['res.cloudinary.com'],
  },

}


module.exports = nextConfig
