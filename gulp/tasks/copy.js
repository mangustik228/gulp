// Функция копирования

export const copy = () => {
    return app.gulp.src(app.path.src.files) // Откуда берем
    .pipe(app.gulp.dest(app.path.build.files)) // Куда переносим
}