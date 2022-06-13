import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // Плагин для обработки svg
import versionNumber from "gulp-version-number";


export const html = () => {
    return app.gulp.src(app.path.src.html) // Откуда берем
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error <%= error.message %>"
            }))
        )
        .pipe(fileinclude()) // Объединяем файлы
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(webpHtmlNosvg())
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
                    'file':'gulp/version.json'
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.html)) // Куда переносим
}
