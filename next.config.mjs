const nextConfig = {
  reactStrictMode: true,
  // Enable experimental features for Next.js 15
  experimental: {
    // Enable React 19 features
    react: {
      version: 19,
    },
    // Enable Turbopack for faster development
    turbo: {
      rules: {
        // Add any custom Turbopack rules here
      },
    },
  },
}

export default nextConfig
