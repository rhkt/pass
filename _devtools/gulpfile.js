var gulp = require('gulp');
var browsersync = require("browser-sync").create();
var sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const paths = {
    sass: {
        src: '../sass/src/**/*.scss',
        dest: '../sass/dest/'
    }
};

// サーバーを立ち上げる
gulp.task('build-server', function(done) {
    browsersync.init({
        server: {
            baseDir: "../"
        },
        open: 'external',
        //IPアドレスを指定する
        host: '192.168.11.2'
    });
    done();
    console.log('Server was launched');
});

// 監視ファイル
gulp.task('watch-files', function(done) {
    gulp.watch("../*/*.html", gulp.task('browser-reload'));
    gulp.watch("../*/*/*.css", gulp.task('browser-reload'));
    gulp.watch("../*/*.js", gulp.task('browser-reload'));
    gulp.watch(paths.sass.src, gulp.series('sass-compile'));
    gulp.watch('../ejs/**/*.ejs', gulp.series('ejs-compile'));
    done();
    console.log(('gulp watch started'));
});

// ブラウザのリロード
gulp.task('browser-reload', function(done) {
    browsersync.reload();
    done();
    console.log('Browser reload completed');
});

// scss用のコンパイル作業
gulp.task('sass-compile', function(done) {
    gulp.src(paths.sass.src)
        .pipe(sassGlob())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([autoprefixer({ browsers: ["last 3 versions", "ie >= 9", "Android >= 4", "ios_saf >= 8"] })]))
        .pipe(gulp.dest(paths.sass.dest));
    done();
});


gulp.task('ejs-compile', function(done) {
    gulp.src(["../ejs/**/*.ejs", '!' + "../ejs/**/_*.ejs"])
        .pipe(ejs({ title: 'gulp-ejs' }))
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest('../html'));
    done();
});

gulp.task('iconfont', function(done) {
    gulp.src(['../svg/**/*.svg'])
        .pipe(iconfontCss({
            fontName: 'icons',
            path: '../svg/_icons.scss',
            // targetPath: '../../../sass/src/layout/_icaaaons.scss',
            targetPath: '../../../../sass/src/layout/_icaaaons.scss',
            fontPath: './fonts/icons/'
        }))
        .pipe(iconfont({
            fontName: 'icons',
            // normalize: true,
            // normalize: true,
            fontHeight: 500
        }))
        .pipe(gulp.dest('../sass/dest/fonts/icons/'));
    done();
});


// タスクの実行
gulp.task('default', gulp.series('build-server', 'sass-compile', 'ejs-compile', 'watch-files', function(done) {
    done();
    console.log('Default all task done!');
}));