import { useEffect, useState } from "react";
import NoteCard from "../../components/Cards/NoteCard";
import ReactModal from 'react-modal';
import { PlusIcon } from "lucide-react";
import NoteForm from "./NoteForm";
import axiosInstance from "../../utils/axiosInstance";
import { format } from 'date-fns';

const Home = () => {
  const [noteModal, setNoteModal] = useState({
    isShown: false,
    type: "add",
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
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mt-8 w-full h-min">
      {
        notes.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
          />
        ))
      }

      
      <ReactModal
      isOpen={noteModal.isShown}
      onRequestClose={() => setNoteModal({ ...noteModal, isShown: false })}
      style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },}}
      contentLabel="Note Modal"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-1/2 "
      >
        <NoteForm/>
      </ReactModal>
      <button onClick={() => setNoteModal({ ...noteModal, isShown: true })} className="absolute bottom-4 right-4 bg-blue-500 rounded-full text-white p-2"><PlusIcon className="w-10 h-10"/></button>
    </div>
  );
};

export default Home;
