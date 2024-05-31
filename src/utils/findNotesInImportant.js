export const findNotesInImportant = (Important, id) => {
    return Important.some(note => note.id === id);
}
export default findNotesInImportant;