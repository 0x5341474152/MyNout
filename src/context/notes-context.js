import { createContext, useContext, useReducer} from 'react';
import { notesReducer } from '../reducers/notesReducer';


const NotesContext = createContext();

const NotesProvider = ({children}) => {

    const initialState = {
        title: '',
        text: '',
        notes: [],
        Archive: [],
        Important: [],
        Bin: [],
    }

    const [{ title, text, notes, Archive,Important ,Bin}, notesDispatch] = useReducer(notesReducer, initialState);

    return (
        <NotesContext.Provider value={{ title, text, notes, Archive,Important,Bin, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes }