'use strict';

/*
 * IMPORT TASKS
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');


/*
 * CONFIGURATION
 */

gulp.task('clean', cleanTask);
gulp.task('copy', ['clean'], copyTask);
gulp.task('sass', ['clean'], sassTask);
gulp.task('default', ['sass', 'copy'], defaultTask);


var copyFiles = ['./src/**/*.js', './src/**/*.html'];
var copyDest = './dist/';

var sassFiles = ['./src/toggleEdit.scss'];
var sassDest = './dist/';



/*
 * IMPLEMENTATION
 */

function cleanTask(){
    return gulp
        .src('./dist', {read: false})
        .pipe(clean());
}

function copyTask(){

    return gulp
        .src(copyFiles)
        .pipe(gulp.dest(copyDest));

}

function defaultTask(){}

function sassTask(){

    return gulp
        .src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(sassDest));

}
