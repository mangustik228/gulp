export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: false, // отключение сообщений в браузере, если нужны: то true
        port: 3000,
    });
}