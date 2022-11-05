const gulp = require('gulp')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const git = require('git-rev-sync')
const replace = require('gulp-replace')
const pug = require('gulp-pug')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('./webpack.config')

const src_path = './src'
const public_path = '../firebase/public'

const paths = {
	src: {
		pug: src_path + '/pug/**/*.pug',
		js: src_path + '/js/*.js',
		css: src_path + '/css/*.css'
	},
	exclude: {
		pug: '!' + src_path + '/pug/**/_*.pug'
	},
	public: {
		html: public_path + '/',
		js: public_path + '/js',
		css: public_path + '/css'
	}  
}

const pugOptions = {
 	pretty: true,
}

// Pug の Task
gulp.task('pug', () => {
	return gulp.src([paths.src.pug, paths.exclude.pug])
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(pug(pugOptions))
		.pipe(replace('{{git}}', git.short()))
		.pipe(gulp.dest(paths.public.html))
})

gulp.task('js', () => {
	return webpackStream(webpackConfig, webpack)
		.pipe(gulp.dest(paths.public.js))
})

gulp.task('css', () => {
	return gulp.src(paths.src.css)
		.pipe(gulp.dest(paths.public.css))
})

gulp.task('watch', () => {
	gulp.watch(paths.src.pug, gulp.task('pug'))
	gulp.watch(paths.src.js, gulp.task('js'))
	gulp.watch(paths.src.css, gulp.task('css'))
})

gulp.task('default', gulp.series('pug', 'js', 'css', gulp.parallel('watch')))
