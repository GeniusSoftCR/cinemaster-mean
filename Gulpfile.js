'use strict'
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  nib = require('nib'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  angularFilesort = require('gulp-angular-filesort'),
  inject = require('gulp-inject'),
  wiredep = require('wiredep').stream,
  gulpif = require('gulp-if'),
  useref = require('gulp-useref'),
  uglify = require('gulp-uglify'),
  connect = require('gulp-connect');

// Servidor web de desarrollo
gulp.task('connect', function () {
  connect.server({
    root: 'public',
    port: 8000,
    livereload: true
  })
})
// Preprocesador sass
gulp.task('css', function () {
  gulp.src('./public/assets/css/sass/main.scss')
    .pipe(sass({ use: nib() }))
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(connect.reload())
})

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function () {
  gulp.src('./public/**/*.html')
})

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function () {
  return gulp.src('./public/assets/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
})

// Busca en las carpetas de estilos y javascript los archivos que hayamos creado
// para inyectarlos en el index.html
gulp.task('inject', function () {
  // var target = gulp.src('./public/app/index.html')
  // var sources = gulp.src(['./public/app/**/*.js']);
  // var injectOptions = {
  //      addRootSlash: false,
  //      ignorePath: '../'
  // };
  // gulp.src('./public/app/index.html')
  //   .pipe(inject(
  //     gulp.src('./public/app/**/*.js') // gulp-angular-filesort depends on file contents, so don't use {read: false} here 
  //       .pipe(angularFilesort()), { ignorePath: 'public/', addRootSlash: false }
  //     ))
  //   .pipe(gulp.dest('./public/app'));
})
// Inyecta las librerias que instalemos vía Bower
gulp.task('wiredep', function () {
  gulp.src('./public/app/*.html')
    .pipe(wiredep({
      directory: './public/assets/vendor',
      ignorePath: '../'
    }))
    .pipe(gulp.dest('./public/app'))
})

// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function () {
  gulp.watch(['./public/app/**/*.html'], ['html'])
  gulp.watch(['./public/assets/css/sass/**/*.scss'], ['css', 'inject'])
  gulp.watch(['./public/assets/js/**/*.js', './Gulpfile.js'], ['inject', 'wiredep'])
  gulp.watch(['./bower.json'], ['wiredep'])
})

// with uncss
// gulp.task('build', ['templates', 'compress', 'nocss', 'images']);
gulp.task('default', ['connect', 'inject', 'wiredep', 'watch'])

