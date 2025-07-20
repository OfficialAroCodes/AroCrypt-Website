module.exports = {
  siteUrl: "https://arocrypt.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*"],
  experimental: {
    appDir: true,
  },
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
