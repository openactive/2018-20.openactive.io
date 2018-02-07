/**
 * Created by georgehawthorne on 23/11/2017.
 */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/,
        lazy: true,
        camelize: true
    });


gulp.task('styles', function () {
    return gulp.src('_sass/main.scss')

        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            errLogToConsole: true
        }))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe($.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', 'Firefox >= 4'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('_site/assets'));
});
