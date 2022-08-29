module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '*': '.',
            '@root': './',
            '@src': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@constants': './src/constants',
            '@models': './src/models',
            '@utils': './src/utils',
            '@navigation': './src/navigation',
            '@context': './src/context',
            '@types': './src/types',
          },
        },
      ],
      ['styled-components', { ssr: false }],
    ],
  };
};
