import gulp from "gulp";
import { path } from "./gulp/config/path.js";

// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js"


// Чего там с сущностями(по-ходу особенность js)
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import { copy } from "./gulp/tasks/copy.js"; // Импорт задачи
import { reset } from "./gulp/tasks/reset.js"; // Импорт задачи удаления
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/sass.js";
// Путь за которым нужно следить

function watcher() {
    gulp.watch(path.watch.files, copy) // (путь_файла, действие_для_выполнения)
    gulp.watch(path.watch.html, html) // (путь_файла, действие_для_выполнения)
    gulp.watch(path.watch.sass, scss) 
}

// Константа выполнения сценария
const main_task = gulp.parallel(copy, html, scss);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, main_task, gulp.parallel(watcher,server)); // Последовательное выполнение(удаляем -> копируем -> включаем_наблюдателя)

// Выполнения сценария по умолчанию
gulp.task('default', dev);