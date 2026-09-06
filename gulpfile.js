const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass')(sass);
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const connectPHP = require('gulp-connect-php');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const del = require('del');
const htmlmin = require('gulp-htmlmin');


gulp.task('clean', function () {
    return del(['dist/**', '!dist']);
});
// Локальный сервер для разработки
gulp.task('server', function() {
    connectPHP.server({
        base: './',
        port: 8000,
        keepalive: true
    }, function (){
        browserSync.init({
            proxy: 'localhost:8000',
            port: 8080,
            open: true,
            notify: false
        });
    });
});

// Стили для разработки
gulp.task('styles-dev', function () {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'not dead', '> 0.5%'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

// Стили для продакшена
gulp.task('styles-build', function () {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'not dead', '> 0.5%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: {
                2: {
                    removeAllComments: true,
                    restructureRules: true
                }
            }
        }))
        .pipe(gulp.dest('assets/css'));
});

// Скрипты для разработки
gulp.task('scripts-dev', function () {
    return gulp.src('assets/js/modules/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(browserSync.stream());
});

// Скрипты для продакшена
gulp.task('scripts-build', function () {
    return gulp.src('assets/js/modules/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/js'));
});

// Вотчер
gulp.task('watch', function () {
    gulp.watch('assets/scss/**/*.scss', gulp.series('styles-dev')).on('change', browserSync.reload);
    gulp.watch(['assets/js/**/*.js', '!assets/js/index.js', '!assets/js/index.js.map'], gulp.series('scripts-dev')).on('change', browserSync.reload);
    gulp.watch('assets/img/*.+(png|jpg|jpeg|gif|svg)').on('change', browserSync.reload);
    gulp.watch('./*.php').on('change', browserSync.reload);
});

// Копирование ассетов в dist (img, css, js и т.д.)
gulp.task('copy-assets', function () {
    return gulp.src([
        'assets/**/*',
        '!assets/scss{,/**}'
    ])
    .pipe(gulp.dest('dist/assets'));
});

// Экспорт index.html (после сборки стилей/скриптов!)
gulp.task('export-static', function (done) {
    const url = 'http://localhost:8000/';
    const outputDir = path.join(__dirname, 'dist');
    const outputFile = 'index.html';

    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

    fetch(url)
        .then(res => res.text())
        .then(html => {
            fs.writeFileSync(path.join(outputDir, outputFile), html, 'utf8');
            console.log('Сохранено: dist/index.html');
            done();
        })
        .catch(e => {
            console.error('Ошибка экспорта:', e.message);
            done();
        });
});
gulp.task('minify-html', function () {
    return gulp.src('dist/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments:    true,
            minifyCSS:         true,
            minifyJS:          true
        }))
        .pipe(gulp.dest('dist'));
});

// Задача для продакшена (билд + экспорт)
gulp.task('build', gulp.series(
      'clean',
    'styles-build',
    'scripts-build',
    'copy-assets',
    'export-static',
    'minify-html'
));

// По умолчанию — только разработка
gulp.task('default', gulp.parallel('watch', 'server', 'styles-dev', 'scripts-dev'));
