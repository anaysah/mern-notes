import { useState } from "react";
import NoteCard from "../../components/Cards/NoteCard";
import ReactModal from 'react-modal';
import { PlusIcon } from "lucide-react";
import NoteForm from "./NoteForm";

const Home = () => {
  const [noteModal, setNoteModal] = useState({
    isShown: false,
    type: "add",
  });

  return (
    <div className="grid grid-cols-3 gap-4 mt-8 w-full h-min">
      <NoteCard
        title="The Magical Bow"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        date="24/03/2023"
      />
      <NoteCard
        title="The Power"
        content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        date="24/03/2023"
      />
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
