import * as nodePath from 'path'; // Получить имя папки нашего проекта
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`; // Путь с результатом (можно использовать rootFolder или './dist')
const srcFolder = `./src`;

// Какой то там объект в котором храниться вся информация о пути
export const path = { 
    build: {
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`, // Куда переносим
    },
    src: {
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`, // Путь который хотим копировать  
    },
    watch: {
        html: `${srcFolder}/**/*.html`, // Наблюдаем за всеми html
        files: `${srcFolder}/files/**/*.*`,
    }, // Папки за которыми надо следить
    clean: buildFolder, 
    buildFolder: buildFolder,
    srcForlder: srcFolder,
    rootFolder: rootFolder,
    ftp: `` // Папка на удаленном ftp-сервере
}