module.exports = {
  tabWidth: 2,
  overrides: [
    {
      files: '*.js',
      options: {
        printWidth: 80,
        useTabs: false,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: 'all',
        arrowParens: 'always',
        parser: 'babel',
      },
    },
    {
      files: '*.html',
      options: {
        useTabs: false,
        singleQuote: false,
        parser: 'html',
      },
    },
    {
      files: '*.css',
      options: {
        useTabs: false,
        singleQuote: false,
        parser: 'css',
      },
    },
  ],
};
