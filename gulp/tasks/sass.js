import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename'

import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from "gulp-group-css-media-queries";


const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.sass, { sourcemaps: true }) // Откуда берем
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SASS",
                message: "Error: <%= error.message %>"
            })))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries()) // Группировка медиа запросов
        .pipe(webpcss(
            {
                webpClass: ".webp", // Если браузер поддерживает .webp, то будет выдаваться webp
                noWebpClass: ".no-webp" // Иначе не webp изображение 
            }))
        .pipe(autoPrefixer({
            grid: true, // Поддержка сетки
            ovverideBrowserlist: ["last 3 versions"], // Кол-во версий у бразера
            cascade: true 
        }))
        // Раскомментировать если нужен будет не сжатый файл стилей
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss()) // Сжатие стилей
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css)) // Куда переносим
        .pipe(app.plugins.browsersync.stream());
}