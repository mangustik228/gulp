
### **Сборка Gulp** (автор: [Фрилансер по жизни](https://www.youtube.com/c/FreelancerLifeStyle))
___
Подготовка:
- установить [node.js](https://nodejs.org/en/)  
- глобальная установка **gulp**:
```bash
npm i gulp-cli -g
```
Команды внутри проекта:
```bash
npm i # Установка пакетов из package.json
npm i gulp -D # Локальная установка
gulp # Запустить сборку gulp
gulp deployZIP # Заархивировать
gulp deployZIP --build # Заархивировать версию в продашн
gulp deployFTP # Выгрузить на ftp-сервер
gulp deployFTP --build # Выгрузить на ftp-сервер продакшн
gulp --build # Сборка в продакшн

```
Дополнительные настройки: 
- Возможно сборка сразу 2ух css (сжатый/не сжатый), для этого раскомментировать:
```bash  
# gulp/tasks/scss.py
.pipe(app.gulp.dest(app.path.build.css))
```
- Настройки сервера прописываются в файле:
```bash
gulp/config/ftp.js
# Также необходимо прописать в какую папку будет выгружать в 
gulp/config/path.js # ftp: 'название_папки'
``` 
- Возможно загрузка на ftp-сервер после каждого изменения, для этого для каждой просмотративаемой задачи заменить:
```bash
# gulp/gulpfile.js 
copy -> gulp.series(copy, ftp) 
html -> gulp.series(html, ftp)
...
```
- Сборка рассчитана на препроцессор SASS, чтоб использовать SCSS:
```bash
# gulp/config/path.js
# -> Везде меняем sass на scss
#
# gulp/tasks/fonts.js
# -> Меняем sass/fonts.sass -> scss/fonts.scss | str[47] 
# -> str[84,85] Редактируем вывод по SCSS
#
# !!! В остальных файлах оставляем все как есть !!!

```
- Примечание:  
Для удобной работы, необходимо установить Path Autocomplete(для vs code)  
Ссылки на относительные пути необходимо давать через @ , пример:
```html
<a href="@img/example.jpg">example</a>
```