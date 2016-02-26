/**
 * Created by mojtaba on 9/7/2015.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');

gulp.task('makeCSS', function () {
    gulp.src('scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths:['bower_components/foundation/scss','bower_components']
        }).on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});
gulp.task('watchSCSS', function () {
    gulp.watch('scss/*.scss', ['makeCSS']);
});

gulp.task('buildJSRequirement', function(cb) {
    gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        //'bower_components/angular-animate/angular-animate.js',
        'bower_components/foundation/js/foundation/foundation.js'
    ])
        .pipe(concat("c.js"))
        .pipe(uglify())
        .pipe(rename("reqirements.js"))
        .pipe(gulp.dest('public/js'));
});
gulp.task('build', ['buildJSRequirement','makeCSS']);

gulp.task('default', ['buildJSRequirement','makeCSS', 'watchSCSS'], function() {

});