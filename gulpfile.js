var 
gulp = require('gulp'),
connect = require('gulp-connect'),
sass = require('gulp-sass'),
cssnext = require('gulp-cssnext'),
plumber = require('gulp-plumber'),
using = require('gulp-using'),
uglify = require('gulp-uglify'),
karma = require('gulp-karma'),
webpack = require('webpack'),
gulpwebpack = require('gulp-webpack'),
webpackconfig = require('./webpack.config.js'),
del = require('del');

gulp.task('default',['copy','watch','karma','connect']);

gulp.task('watch',function(){
	gulp.watch('./develop/assets/js/jsx/**/*.js', ['build']);
	gulp.watch('./develop/assets/sass/**/*.scss', ['sass']);
	gulp.watch('./develop/assets/html/*.html',['copy']);
});

gulp.task('sass',function(){
	gulp.src('./develop/assets/sass/*.scss')
		.pipe(plumber())
		.pipe(using())
		.pipe(sass().on('error',function(err){
			console.log(err.message)
		}))
		.pipe(cssnext())
		.pipe(gulp.dest('./release/css'));
	gulp.src('./release/css/*.css').pipe(gulp.dest('public/css'));
});

gulp.task('build', function () {
    gulp.src('./develop/assets/js/app.js')
    .pipe(plumber())
    .pipe(using())
    .pipe(gulpwebpack(webpackconfig))
//    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('karma', function(){
	var testfiles = ['./test/*'];

	return gulp.src(testfiles)
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'watch'
		}));
});

// gulp.task('server', function(){
// 	gulp.src('public')
// 		.pipe(webserver({
// 			livereload: true,
// 			fallback: 'index.html'
// 		}));
// });

gulp.task('copy', function(){
	gulp.src('./develop/assets/html/*.html')
		.pipe(gulp.dest('./public'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'public',//ルートディレクトリ
    livereload: true //ライブリロード
  });
});
