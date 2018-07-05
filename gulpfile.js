
const gulp = require('gulp');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const streamify = require('gulp-streamify');
const browserify = require('browserify');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify-es').default;
const rigger = require('gulp-rigger');
const del = require('del');
const ghpages = require('gulp-gh-pages');


var path = {
  build: {
      html: 'build/',
      js: 'build/js/',
      css: 'build/css/',
      img: 'build/images/',
      fonts: 'build/fonts/'
  },
  src: { 
      html: 'src/html/*.html', 
      js_main: 'src/js/script.js',
      js_libs: 'src/js/libs/*.js',
      style: 'src/style/style.scss',
      img: 'src/images/**/*.*', 
      fonts: 'src/fonts/**/*.*',
      all: 'src/**/*.*'
  },
  watch: { 
      html: 'src/**/*.html',
      js: 'src/js/**/*.js',
      style: 'src/style/**/*.scss',
      img: 'src/images/**/*.*',
      fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};



gulp.task('html', function () {
  return gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html));
});

gulp.task('css', function(){
  return gulp.src(path.src.style)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.build.css));
});

gulp.task('js', function(){
  return browserify(path.src.js_main)
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(path.build.js));
});

gulp.task('images', function () {
  return gulp.src(path.src.img)
    .pipe(gulp.dest(path.build.img));
});

gulp.task('fonts', function () {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts));
});

gulp.task('build:clean', function () {
  return del(['build/**', '!build']);
});

gulp.task('deploy', function () {
  return gulp.src('./build/**/*')
    .pipe(ghpages());
})

gulp.task('watch', function () {
  return gulp.watch(path.src.all,['default']);
});

gulp.task('default', ['html', 'css', 'js','images','fonts' ]);