// Modules
var gulp = require('gulp'),
    path = require('path'),
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
		rename = require('gulp-rename'),
    cleancss = require('postcss-clean'),
    mqpacker = require('css-mqpacker'),
    comments = require('postcss-discard-comments'),
    uncss = require('postcss-uncss'),
    postcss = require('gulp-postcss'),
    size = require('gulp-size');

var supportedBrowsers = [
  	'> 1%',
  	'Last 2 versions',
  	'IE 11',
  	'IE 10',
  	'IE 9',
];

const APP_SRC = 'src';
const APP_SASS = 'src/sass';
const UNITED_OVERRIDE = 'src/sass';
const UNITED_DIST = 'submodules/united';
const UNITED_FONTS_DIST = 'submodules/united/18franklin/fonts/webfonts';
const UNITED_SASS_DIST = 'submodules/united/src/base';
const UNITED_SASS_DIST_DIR = path.join(__dirname, ...UNITED_SASS_DIST.split('/'));
const APP_SRC_DIR = path.join(__dirname, ...APP_SRC.split('/'));
const APP_SASS_DIR = path.join(__dirname, ...APP_SASS.split('/'));
const UNITED_OVERRIDE_DIR = path.join(__dirname, ...UNITED_OVERRIDE.split('/'));

// Build United

gulp.task('build-united', function(done) {
  var processors = [
      autoprefixer,
      comments,
      mqpacker
  ];
  return gulp.src(`${UNITED_SASS_DIST}/united.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compact',
        errLogToConsole: true,
        quiet: true,
        includePaths: [
          APP_SASS_DIR,
          UNITED_OVERRIDE_DIR,
        ]
  }).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(rename('united.css'))
    .pipe(gulp.dest('./static/css'))
    .pipe(size())
});

// Sync fonts

gulp.task('copy-united-fonts', function(done) {
  return gulp.src(`${UNITED_FONTS_DIST}/**/**`)
  .pipe(gulp.dest('./static/fonts'));
});


// Clean the build directory

gulp.task('clean', function(done) {
  return del([
    './static/css/*.css'
  ]);
});

// Subset the united base to only the style required by the app/site

gulp.task('subset-united', function() {
  var processors = [
      uncss({
            html: ['./public/**/*.html']
        }),
      cleancss
  ];
  return gulp.src('./static/css/united.css')
    .pipe(postcss(processors))
    .pipe(rename('united.app.css'))
    .pipe(gulp.dest('./static/css'))
    .pipe(size())
});

// Watch for changes

gulp.task('watch', function() {
    gulp.watch(`${UNITED_FONTS_DIST}/**/*`, ['copy-united-fonts'])
    gulp.watch(`${UNITED_SASS_DIST}/**/*.scss`, ['build-united']);
 });

// Default Task

gulp.task('default', ['watch']);
