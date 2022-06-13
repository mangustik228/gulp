
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
npm i gulp -D # Локальная установка
gulp # Запустить сборку gulp
gulp zip # Заархивировать
gulp fps # Выгрузить на ftp-сервер
gulp --build # Сборка в продакшене

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
``` 
- Возможно загрузка на ftp-сервер после каждого изменения, для этого для каждой просмотративаемой задачи заменить:
```bash
# gulp/gulpfile.js 
copy -> gulp.series(copy, ftp) 
html -> gulp.series(html, ftp)
...
```

