export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // Target only modern browsers
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead',
        'not ie 11',
        'not op_mini all'
      ],
      flexbox: 'no-2009',
      grid: 'autoplace'
    },
    // Minify CSS in production
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          minifyFontValues: true,
          minifyGradients: true,
        }],
      },
    } : {}),
  },
};
