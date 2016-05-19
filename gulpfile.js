(function() {
    'use strict';

    /*
     * IMPORT TASKS
     */

    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var clean = require('gulp-clean');
    var concat = require('gulp-concat');


    /*
     * CONFIGURATION
     */

    gulp.task('clean', cleanTask);
    gulp.task('copy', ['clean'], copyTask);
    gulp.task('sass', ['clean'], sassTask);
    gulp.task('js', ['clean'], jsTask);
    gulp.task('default', ['js', 'sass', 'copy'], defaultTask);


    var copyFiles = ['./src/**/*.html'];
    var copyDest = './dist/';

    var jsFiles = [
        './bower_components/angular/angular.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js',
        './bower_components/angular-animate/angular-animate.js',
        './src/directives/te-text-input/te-text-input.directive.js',
        './src/services/person-service.js',
        './src/views/form/form.js',
        './src/app.js'];
    var jsDest = './dist/';

    var sassFiles = ['./src/app.scss'];
    var sassDest = './dist/';


    /*
     * IMPLEMENTATION
     */

    function cleanTask() {
        return gulp
            .src('./dist', {read: false})
            .pipe(clean());
    }

    function copyTask() {

        return gulp
            .src(copyFiles)
            .pipe(gulp.dest(copyDest));

    }

    function defaultTask() {
    }

    function jsTask(){
        return gulp
            .src(jsFiles)
            .pipe(concat('app.js'))
            .pipe(gulp.dest(jsDest));
    }

    function sassTask() {

        return gulp
            .src(sassFiles)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(sassDest));

    }
})();