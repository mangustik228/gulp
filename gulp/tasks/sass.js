import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename'

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
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css)) // Куда переносим
        .pipe(app.plugins.browsersync.stream());
}