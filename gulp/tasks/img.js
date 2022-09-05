export const img = () => {
  return app.gulp.src(app.path.src.img, { sourcemaps: true})
  .pipe(app.gulp.dest(app.path.build.img))
  .pipe(app.plugins.browsersync.stream());
}