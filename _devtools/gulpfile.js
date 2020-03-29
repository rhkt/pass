var gulp = require('gulp');
var browsersync = require("browser-sync").create();
var sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

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
        }
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
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.sass.dest));
    done();
});

// タスクの実行
gulp.task('default', gulp.series('build-server', 'sass-compile', 'watch-files', function(done) {
    done();
    console.log('Default all task done!');
}));