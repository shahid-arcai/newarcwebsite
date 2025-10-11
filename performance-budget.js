// Performance budgets to ensure the site stays fast
module.exports = {
  // Maximum sizes for different resource types
  budgets: [
    {
      // Maximum initial JavaScript bundle size
      resourceType: 'script',
      budget: 300, // KiB
    },
    {
      // Maximum CSS bundle size
      resourceType: 'stylesheet',
      budget: 50, // KiB
    },
    {
      // Maximum image size
      resourceType: 'image',
      budget: 500, // KiB per image
    },
    {
      // Total page weight
      resourceType: 'total',
      budget: 1500, // KiB
    },
    {
      // Maximum number of requests
      resourceType: 'all',
      budget: 50, // requests
    },
  ],
  
  // Core Web Vitals targets
  timings: [
    {
      metric: 'interactive',
      budget: 3000, // ms - Time to Interactive
    },
    {
      metric: 'first-contentful-paint',
      budget: 1200, // ms
    },
    {
      metric: 'largest-contentful-paint',
      budget: 2000, // ms
    },
    {
      metric: 'cumulative-layout-shift',
      budget: 0.1, // score
    },
  ],
};
