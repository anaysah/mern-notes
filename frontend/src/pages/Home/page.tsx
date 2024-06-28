import { useEffect, useState } from "react";
import NoteCard from "../../components/Cards/NoteCard";
import { PlusIcon } from "lucide-react";
import axiosInstance from "../../utils/axiosInstance";
import AskConfirm from "../../components/Modals/AskConfirm";
import NoteFormModal from "./NoteFormModal";
import { handleError } from "../../utils/helpers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteNote, fetchNotes } from "../../api/notes";
import EmptyNoteCard from "../../components/Cards/EmptyNoteCard";

const Home = () => {
  const queryClient = useQueryClient()

  const { isPending, isError, data, error, isSuccess, isLoading } = useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });

  const deleteNoteMutataion = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      setDeleteModalStates({ isShown: false, noteTitle: "", noteId: 0 })
      queryClient.invalidateQueries({ queryKey: ['notes'] })
    }
  })
  
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

  // const deleteNote = async (noteId: number | undefined) => {
  //   if (!noteId) return;
  //   try {
  //     await axiosInstance.delete(`/delete-note/${noteId}`);
  //     setNotes(notes.filter((note) => note._id !== noteId));
  //     setDeleteModalStates({isShown: false, noteTitle: "", noteId: 0})
  //   } catch (error) {
  //     handleError(error, setError);
  //   }
  // };

  // const pinNote = async (noteId: number | undefined, isPinned: boolean) => {
  //   if (!noteId) return;
  //   try {
  //     const response = await axiosInstance.patch(`/pin-note/${noteId}`, { isPinned:  !isPinned });
  //     setNotes(notes.map((note) => note._id === noteId ? response.data : note));
  //   } catch (error) {
  //     handleError(error, setError);
  //   }
  // }

  const handleDelete = async (noteId: number | undefined) => {
    if (!noteId) return;
    deleteNoteMutataion.mutate(noteId)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 w-full h-min mx-2 sm:mx-auto">
      {isLoading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <EmptyNoteCard key={index} />
        ))
      ) : (
        data?.notes.map((note: Note) => (
          <NoteCard key={note._id} note={note} 
            onDelete={() => setDeleteModalStates({ ...deleteModalStates, isShown: true, noteTitle: note.title, noteId: note._id })}
            onEdit={() => setNoteModalStates({ ...noteModalStates, isShown: true, note: note, type: "edit" })}
          />
        ))
      )}
      <AskConfirm
        isOpen={deleteModalStates.isShown}
        onClose={() => setDeleteModalStates({ ...deleteModalStates, isShown: false, noteTitle: "", noteId: 0 })}
        title={`Delete Note ${deleteModalStates.noteTitle}`}
        message="Are you sure you want to delete this note?"
        onConfirm={() => handleDelete(deleteModalStates.noteId)}
      />
      
      <NoteFormModal noteModalStates={noteModalStates} setNoteModalStates={setNoteModalStates} />

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
