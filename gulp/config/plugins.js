import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";

// Переменная для экспортирования плагинов js
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync
}