import del from "del"; // Плагин удаления
export const reset = () => {
    return del(app.path.clean);
}
