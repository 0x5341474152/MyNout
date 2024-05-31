import { v4 as uuid } from 'uuid';

export const notesReducer = (state, { type, payload }) => {
    switch (type) {
        case 'TITLE':
            return {
                ...state,
                title: payload
            }
        case 'TEXT':
            return {
                ...state,
                text: payload
            }
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, { text: state.text, title: state.title, id: uuid(), isPinned: false }]
            }
        case 'CLEAR_INPUT':
            return {
                ...state,
                title: '',
                text: ''
            }
        case 'PIN':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: true } : note)
            }
        case 'UNPIN':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: false } : note)
            }
        case 'ADD_TO_ARCHIVE':
            return {
                ...state,
                Archive: [...state.Archive, state.notes.find(({id}) => id === payload.id)],
                notes: state.notes.filter(({id}) => id !== payload.id)
            }
        case 'REMOVE_FROM_ARCHIVE':
            return {
                ...state,
                notes: [...state.notes, state.Archive.find(({id}) => id === payload.id)],
                Archive: state.Archive.filter(({id}) => id !== payload.id),
                
            }
        case 'ADD_TO_IMPORTANT':
            return {
                ...state,
                Important: [...state.Important, state.notes.find(({id}) => id === payload.id)],
                notes: state.notes.filter(({id}) => id !== payload.id)
            }
        case 'REMOVE_FROM_IMPORTANT':
            return {
                ...state,
                notes: [...state.notes, state.Important.find(({id}) => id === payload.id)],
                Important: state.Important.filter(({id}) => id !== payload.id),
            }
        case 'ADD_TO_BIN':
            return {
                ...state,
                Bin: [...state.Bin, state.notes.find(({id}) => id === payload.id)],
                notes: state.notes.filter(({id}) => id !== payload.id)
            }
        case 'REMOVE_FROM_BIN':
            return {
                ...state,
                notes: [...state.notes, state.Bin.find(({id}) => id === payload.id)],
                Bin: state.Bin.filter(({id}) => id !== payload.id),
            }
        default:
            return state
    }
}