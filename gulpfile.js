import gulp from "gulp";
import { path } from "../gulp/gulp/config/path.js";

// Чего там с сущностями(по-ходу особенность js)
global.app = {
    path: path,
    gulp: gulp
}

import { copy } from "./gulp/tasks/copy.js" // Импорт задачи
import { reset } from "./gulp/tasks/reset.js" // Импорт задачи удаления
import { html } from "./gulp/tasks/html.js"

// Путь за которым нужно следить

function watcher() {
    gulp.watch(path.watch.files, copy) // (путь_файла, действие_для_выполнения)
    gulp.watch(path.watch.html, html) // (путь_файла, действие_для_выполнения)
}

// Константа выполнения сценария
const main_task = gulp.parallel(copy, html);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, main_task, watcher); // Последовательное выполнение(удаляем -> копируем -> включаем_наблюдателя)

// Выполнения сценария по умолчанию
gulp.task('default', dev);