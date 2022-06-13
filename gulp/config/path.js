import * as nodePath from 'path'; // Получить имя папки нашего проекта
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`; // Путь с результатом (можно использовать rootFolder или './dist')
const srcFolder = `./src`;

// Какой то там объект в котором храниться вся информация о пути
export const path = { 
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`, 
        files: `${buildFolder}/files/`, // Куда переносим
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/app.js`,
        sass: `${srcFolder}/sass/style.sass`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`, // Путь который хотим копировать  
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        sass: `${srcFolder}/sass/**/*.sass`,
        html: `${srcFolder}/**/*.html`, // Наблюдаем за всеми html
        files: `${srcFolder}/files/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`
    }, // Папки за которыми надо следить
    clean: buildFolder, 
    buildFolder: buildFolder,
    srcForlder: srcFolder,
    rootFolder: rootFolder,
    ftp: `` // Папка на удаленном ftp-сервере
}