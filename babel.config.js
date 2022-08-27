module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          alias: { '/*': './src' },
          extensions: ['.js', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
