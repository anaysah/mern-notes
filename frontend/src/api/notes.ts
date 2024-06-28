import axiosInstance from "../utils/axiosInstance";
import { wait } from "../utils/helpers";

const fetchNotes = async () => {
    await wait(1000);
    const response = await axiosInstance.get("/notes");
    const notes = await response.data;
    console.log(notes);
    return notes;
};

const deleteNote = async (noteId: number) => {
    const response = await axiosInstance.delete(`/delete-note/${noteId}`);
    const note = await response.data;
    return note;
};

const addnote = async(note:Note) =>{
    const response = await axiosInstance.post("/add-note", note)
    return await response.data;
}

export {
    fetchNotes, deleteNote, addnote
}