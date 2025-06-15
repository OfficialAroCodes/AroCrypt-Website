module.exports = {
  siteUrl: "https://arocrypt.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
