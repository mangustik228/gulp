import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // Плагин для обработки svg
import versionNumber from "gulp-version-number";


export const html = () => {
    return app.gulp.src(app.path.src.html) // Откуда берем
        .pipe(app.plugins.plumber( // Обработка ошибок
            app.plugins.notify.onError({ // Вывод ошибок уведомлением
                title: "HTML",
                message: "Error <%= error.message %>"
            }))
        )
        .pipe(fileinclude()) // Объединяем файлы
        .pipe(app.plugins.replace(/@img\//g, 'img/')) // Замена @img на img
        .pipe(webpHtmlNosvg()) // Замена картинок на webp (только текстовая)
        .pipe(
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.html)) // Куда переносим
        .pipe(app.plugins.browsersync.stream()); // Стрим страницы
}
