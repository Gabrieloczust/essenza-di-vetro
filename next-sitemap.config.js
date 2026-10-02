/** @type {import('next-sitemap').IConfig} */
const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Google-Extended", "Applebot-Extended"];

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://essenza-di-vetro.vercel.app",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/icon.png", "/apple-icon.png", "/llms.txt"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
  },
};
