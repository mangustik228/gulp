import webp from "gulp-webp";
import imagemin from "gulp-imagemin";


export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "IMAGES",
                message: "Error <%= error.message %>"
            }))
        )
        .pipe(app.plugins.newer(app.path.build.images)) // Проверяет изменилась ли картинка
        .pipe(webp()) // Конвертирует
        .pipe(app.gulp.dest(app.path.build.images)) // Сохраняет
        .pipe(app.gulp.src(app.path.src.images)) // Еще раз загружает файлы 
        .pipe(app.plugins.newer(app.path.build.images)) // Еще раз проверяет изменения
        .pipe(imagemin({ // Сжимаем картинки
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizatioinLevel: 3 // от 0 до 7 (на сколько сильно сжимать)
        }))
        .pipe(app.gulp.dest(app.path.build.images)) // Сохраняем оптимизированные картинки
        .pipe(app.gulp.src(app.path.src.svg)) // Выгружаем файлы svg
        .pipe(app.gulp.dest(app.path.build.images)) // Просто сохраняем svg
        .pipe(app.plugins.browsersync.stream());
}