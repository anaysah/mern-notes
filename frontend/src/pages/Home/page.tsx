import { useEffect, useState } from "react";
import NoteCard from "../../components/Cards/NoteCard";
import { PlusIcon } from "lucide-react";
import axiosInstance from "../../utils/axiosInstance";
import AskConfirm from "../../components/Modals/AskConfirm";
import NoteFormModal from "./NoteFormModal";
import { handleError } from "../../utils/helpers";

const Home = () => {
  const [deleteModalStates, setDeleteModalStates] = useState<DeleteModalStates>({
    isShown: false,
    noteTitle: "",
    noteId: 0,
  });

  const [noteModalStates, setNoteModalStates] = useState<NoteModalStates>({
    isShown: false,
    type: "add",
    note: null,
  });

  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNotes = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("/notes");
      const data = response.data.notes;
      setNotes(data);
    } catch (error) {
      handleError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const deleteNote = async (noteId: number | undefined) => {
    if (!noteId) return;
    try {
      await axiosInstance.delete(`/delete-note/${noteId}`);
      setNotes(notes.filter((note) => note._id !== noteId));
      setDeleteModalStates({isShown: false, noteTitle: "", noteId: 0})
    } catch (error) {
      handleError(error, setError);
    }
  };

  const pinNote = async (noteId: number | undefined, isPinned: boolean) => {
    if (!noteId) return;
    try {
      const response = await axiosInstance.patch(`/pin-note/${noteId}`, { isPinned:  !isPinned });
      setNotes(notes.map((note) => note._id === noteId ? response.data : note));
    } catch (error) {
      handleError(error, setError);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 w-full h-min mx-2 sm:mx-auto">
      {
        isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <p className="text-lg font-bold">Loading...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-screen">
            <p className="text-lg font-bold">Error: {error}</p>
          </div>
        ) : notes.length === 0 ? (
          <div className="flex justify-center items-center h-screen">
            <p className="text-lg font-bold">No notes found.</p>
          </div>
        ) : (
          ""
        )
      }
      {
        notes.map((note) => 
          <NoteCard
            key={note._id}
            note={note}
            onView={()=>setNoteModalStates({...noteModalStates, isShown: true, type: "view", note: note})}
            onEdit={()=>setNoteModalStates({...noteModalStates, isShown: true, type: "edit", note: note})}
            onDelete={() => setDeleteModalStates({ ...deleteModalStates, isShown: true, noteTitle: note.title, noteId: note._id })}
            onPin={() => pinNote(note._id, note.isPinned)}
          />
        )
      }
      <AskConfirm
        isOpen={deleteModalStates.isShown}
        onClose={() => setDeleteModalStates({ ...deleteModalStates, isShown: false, noteTitle: "", noteId: 0 })}
        title={`Delete Note ${deleteModalStates.noteTitle}`}
        message="Are you sure you want to delete this note?"
        onConfirm={() => deleteNote(deleteModalStates.noteId)}
      />

      
        <NoteFormModal noteModalStates={noteModalStates} setNoteModalStates={setNoteModalStates} setNotes={setNotes} notes={notes}/>
      

      <button
        onClick={() => setNoteModalStates({ ...noteModalStates, isShown: true, type: "add" })}
        className="fixed bottom-4 right-4 bg-blue-500 rounded-full text-white p-2"
      >
        <PlusIcon className="w-10 h-10" />
      </button>
    </div>
  );
};

export default Home;
