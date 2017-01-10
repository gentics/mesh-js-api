const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('build', () => {
    var tsResult = gulp.src(['./src/**/*.ts', './typings/*.ts', './node_modules/@types/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    tsResult.dts.pipe(gulp.dest('./lib'));
    var res = tsResult.js.pipe(sourcemaps.write('.', { sourceRoot: '../src' })).pipe(gulp.dest('./lib')).on('end', () => {
        // require('./lib/test.spec');
    });
    return res;
});

gulp.task('clean', () => del(['lib/**', '!lib', 'build/**', '!build']))

gulp.task('prepublish', ['clean', 'build']); // 'test'

gulp.task('test', ['build'], () => {
    require('./lib/test.spec');
});

gulp.task('watch', ['build'], () => {
    gulp.watch('src/**/*.ts', ['build']);
});
