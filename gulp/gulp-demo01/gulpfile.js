var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var html = require('gulp-htmlmin');
var livereload = require('gulp-livereload')

gulp.task('js', function (params) {
  return gulp.src('src/**/*.js')
    .pipe(concat('build.js'))
    .pipe(gulp.dest('dist/js/'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js/'))
    .piep(livereload())
})

gulp.task('less', function (done) {
  return gulp.src('src/less/*.less')
  .pipe(less())
  .pipe(gulp.dest('src/css/'))
  .pipe(livereload())
})


gulp.task('css', function () {
  return gulp.src('src/css/*.css')
  .pipe(concat('build.css'))
  .pipe(gulp.dest('dist/css/'))
  .pipe(rename({suffix: '.min'}))
  .pipe(cleanCss({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css/'))
  .pipe(livereload())
})

gulp.task('html', function name(params) {
  return gulp.src('index.html')
  .pipe(html({collapseWhitespace: true}))
  .pipe(gulp.dest('dist/'))
  .pipe(livereload())
})

// gulp.task('default', function () {
//   // 将你的默认的任务代码放在这
// });
// gulp.task('default', ['js', 'less', 'css'], function name(params) {
//   params()
// });

gulp.task('watch', ['default'], function name(params) {
  livereload.listen();
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch(['src/less/*.less', 'src/css/*.css'], ['css'])
  params()
})
gulp.task('default', gulp.parallel('js', 'less', 'css', 'html', function (done) {
  done()
}));
