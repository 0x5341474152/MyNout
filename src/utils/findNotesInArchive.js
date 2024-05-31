export const findNotesInArchive = (Archive, id) => {
    return Archive.some(note => note.id === id);
}
export default findNotesInArchive;
