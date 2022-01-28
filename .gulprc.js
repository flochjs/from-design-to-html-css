const gulp = require('gulp');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const { pipeline } = require('stream');

const cssConfig = require('./.postcssrc');

const BUILD_NAME = 'build';

const buildJs = (srcs, dest = '.') => {
  pipeline(
    gulp.src(srcs),
    sourcemaps.init(),
    eslint(),
    eslint.format(),
    babel({
      presets: ['@babel/env'],
    }),
    uglify(),
    sourcemaps.write(),
    rename({
      basename: BUILD_NAME,
    }),
    gulp.dest(dest),
    (err) => {
      if (err) console.error(`building ${srcs} failed: `, err);
    },
  );
};

const buildCss = (srcs, dest = '.') => {
  pipeline(
    gulp.src(srcs),
    sourcemaps.init(),
    cssConfig(),
    sourcemaps.write(),
    rename({
      basename: BUILD_NAME,
    }),
    gulp.dest(dest),
    (err) => {
      if (err) console.error(`building ${srcs} failed: `, err);
    },
  );
};

const build = (jsSrcs, cssSrcs) => {
  console.clear();

  buildJs(jsSrcs);
  buildCss(cssSrcs);
};

const defaultTask = () => {
  const jsSrcs = ['./*/index.js', '!./node_modules/**'];
  const cssSrcs = ['./*/main.css', '!./node_modules/**'];

  const makeBuild = () => build(jsSrcs, cssSrcs);

  makeBuild();

  const jsWatcher = gulp.watch(jsSrcs);
  const cssWatcher = gulp.watch(cssSrcs);

  jsWatcher.on('add', makeBuild);
  jsWatcher.on('change', makeBuild);

  cssWatcher.on('add', makeBuild);
  cssWatcher.on('change', makeBuild);
};

exports.default = defaultTask;
