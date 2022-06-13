import gulp from "gulp";
import { path } from "../gulp/gulp/config/path.js";

// Чего там с сущностями(по-ходу особенность js)
global.app = {
    path: path,
    gulp: gulp
}

import { copy } from "../gulp/gulp/tasks/copy.js" // Импорт задачи

// Путь за которым нужно следить
function watcher() {
    gulp.watch(path.watch.files, copy) // (путь_файла, действие_для_выполнения)
}

// Построение сценариев выполнения задач
const dev = gulp.series(copy, watcher); // Последовательное выполнение(копируем -> включаем_наблюдателя)

// Выполнения сценария по умолчанию
gulp.task('default', dev);