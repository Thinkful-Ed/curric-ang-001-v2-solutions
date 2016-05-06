'use strict';

var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var addSrc = require('gulp-add-src');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var connect = require('gulp-connect');
var templateCache = require('gulp-angular-templateCache');


gulp.task('serve', function(){
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('templates', ['usemin'], function(){
  return gulp.src(['app/src/*.html'])
    .pipe(templateCache({
      module: 'countriesAndCapitals',
      moduleSystem: 'IIFE',
      root: 'src/'
    }))
    .pipe(addSrc(['./dist/app/app.js']))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/app'));
});

gulp.task('clean', function(){
  return del(['./dist']);
});

gulp.task('usemin',['clean'] , function() {
  return gulp.src('app/index.html')
    .pipe(usemin({
      vendor: [ngAnnotate(), uglify()],
      app: [ngAnnotate(), uglify()]
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['templates']);
