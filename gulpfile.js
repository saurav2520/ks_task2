const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const browserSync = require('browser-sync').create();

function nunjucksTask() {
  // Add the 'base' option to the src call here
  return gulp.src('src/templates/pages/**/*.njk', { base: 'src/templates/pages' })
    .pipe(nunjucksRender({
      path: ['src/templates']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}

// Task to copy assets
function assetsTask() {
  return gulp.src('src/assets/**/*')
    .pipe(gulp.dest('dist/assets'))
    .pipe(browserSync.stream());
}

// Task to serve the site and watch for changes
function serveTask() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    port: 3000
  });

  gulp.watch('src/templates/**/*.njk', nunjucksTask);
  gulp.watch('src/assets/**/*', assetsTask);
}

// Default Gulp task
exports.default = gulp.series(
  gulp.parallel(nunjucksTask, assetsTask),
  serveTask
);

// Build task for production
exports.build = gulp.parallel(nunjucksTask, assetsTask);

// Your default task remains the same for development
exports.default = gulp.series(
  exports.build,
  serveTask
);