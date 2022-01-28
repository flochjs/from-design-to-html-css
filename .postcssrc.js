const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');
const normalize = require('postcss-normalize');

const plugins = [
  stylelint(),
  normalize({ forceImport: true }),
  autoprefixer(),
  cssnano(),
  reporter({ clearReportedMessages: true }),
];

module.exports = () => postcss(plugins);
