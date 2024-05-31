import { useNotes } from "../../context/notes-context";
import   findNotesInArchive  from "../../utils/findNotesInArchive";
import  findNotesInImportant  from "../../utils/findNotesInImportant";
import  findNotesInBin  from "../../utils/findNotesInBin";

export const NotesCard = ({ id, title, text, isPinned }) => {

    
    const { notesDispatch, Archive ,Important,Bin} = useNotes();
    
    
    const isNotesInArchive = findNotesInArchive(Archive, id)
    const isNotesInImportant = findNotesInImportant(Important, id)
    const isNotesInBin = findNotesInBin(Bin, id)

    const onPinClick = (id) => {
        !isPinned ? notesDispatch(
            {
                type: 'PIN',
                payload: { id }
            }) : notesDispatch({
                type: 'UNPIN',
                payload: { id }
            })
    }

    const onArchiveClick = (id) => {
        !isNotesInArchive ? notesDispatch({
            type: 'ADD_TO_ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_FROM_ARCHIVE',
            payload: { id }
        })
    }
    const onImportantClick = (id) => {
        !isNotesInImportant ? notesDispatch({
            type: 'ADD_TO_IMPORTANT',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_FROM_iMPORTANT',
            payload: { id }
        })
    }
    const onBinClick = (id) => {
        !isNotesInBin ? notesDispatch({
            type: 'ADD_TO_BIN',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_FROM_BIN',
            payload: { id }
        })
    }



    return (
        <div className="w-56 border border-neutral-800 p-2 rounded-md w-[300px]" key={id}>
            <div className="flex justify-between border-b-2">
                <p>{title}</p>
                {
                    !isNotesInArchive ? <button onClick={() => onPinClick(id)}>
                        <span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>
                            push_pin
                        </span>
                    </button> : <></>
                }

            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto">
                    <button onClick={() => onArchiveClick(id)}>
                        <span class={isNotesInArchive ? 'material-icons' : 'material-icons-outlined'}>
                            archive
                        </span>
                    </button>
                    <button>
                        <span class="material-icons-outlined">
                            delete_outline
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto">
                    <button onClick={() => onImportantClick(id)}>
                        <span class={isNotesInImportant ? 'material-icons' : 'material-icons-outlined'}>
                            label_important
                        </span>
                    </button>
                    <button>
                        <span class="material-icons-outlined">
                            delete_outline
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto">
                    <button onClick={() => onBinClick(id)}>
                        <span class={isNotesInBin ? 'material-icons' : 'material-icons-outlined'}>
                            delete
                        </span>
                    </button>
                    <button>
                        <span class="material-icons-outlined">
                            delete_outline
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}