module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['defaults', 'ie >= 11', 'firefox >= 49'],
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
    '@babel/preset-typescript',
  ],
  plugins: [process.env.NODE_ENV !== 'production' && require.resolve('react-refresh/babel')].filter(Boolean),
};
