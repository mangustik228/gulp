export const html = () => {
    return app.gulp.src(app.path.src.html) // Откуда берем
        .pipe(app.gulp.dest(app.path.build.html)) // Куда переносим
}