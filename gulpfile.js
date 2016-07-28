(function() {
    'use strict';

    /*
     * IMPORT TASKS
     */

    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        clean = require('gulp-clean'),
        concat = require('gulp-concat'),
        connect = require('gulp-connect'),
        Server = require('karma').Server;;


    /*
     * CONFIGURATION
     */

    gulp.task('clean', ['test'], cleanTask);
    gulp.task('test', testTask);
    gulp.task('copy', ['clean'], copyTask);
    gulp.task('sass', ['clean'], sassTask);
    gulp.task('js', ['test', 'clean'], jsTask);
    gulp.task('webServer', webServerTask);
    gulp.task('serve', ['js', 'sass', 'copy', 'webServer'], serveTask);
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

    function webServerTask(){
        connect.server({
            root: ['./dist']
        });
    }

    function serveTask(){}

    function testTask(done){
        new Server({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done).start();
    }

    function defaultTask(){}

})();