import { PlusIcon } from "lucide-react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputErrorSpan from "../../components/Input/InputErrorSpan";
import ReactModal from "react-modal";
import axiosInstance from "../../utils/axiosInstance";

const NoteFormModal = ({noteModalStates, setNoteModalStates, setNotes, notes}) => {
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<Note>();

  const onSubmit:SubmitHandler<Note> = async (data: Note) => {
    if (noteModalStates.type === "add") {
      addNote(data);
    } else if (noteModalStates.type === "edit") {
      updateNote(data);
    }
  };

  useEffect(() => {
    if(noteModalStates.type === "edit" && noteModalStates.note){
      setValue("title", noteModalStates.note.title);
      setValue("content", noteModalStates.note.content);
      setValue("tags", noteModalStates.note.tags);
    }
  }, [noteModalStates.note, noteModalStates.type, setValue]);

  const addNote = async (data: Note) => {
    // delete data._id;
    try{
      const response = await axiosInstance.post("/add-note", data)
      setNotes([...notes, response.data.note])
      setNoteModalStates({ ...noteModalStates, isShown: false })
      reset();
    }catch(error){
      console.error("Error adding note", error);
    }
  }

  const updateNote = async (data: Note) => {
    try{
      const response = await axiosInstance.put(`/edit-note/${noteModalStates.note._id}`, data)
      setNotes(notes.map(note => note._id === response.data.note._id ? response.data.note : note))
      setNoteModalStates({ ...noteModalStates, isShown: false })
      reset();
    }catch(error){
      console.error("Error updating note", error);
    }
  };

  // State for managing tags
  // const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = () => {
    // Get the value of the input field
    const tagInput = document.getElementById("tagInput") as HTMLInputElement;
    const newTag = tagInput.value.trim();

    if (newTag && !watch("tags").includes(newTag)) {
      // setTags([...tags, newTag]); // Add new tag to the list
      setValue("tags", [...(watch("tags") as string[]), newTag]); // Update form value
      tagInput.value = ""; // Clear the input field
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = watch("tags").filter(tag => tag !== tagToRemove);
    setValue("tags", updatedTags);
  };

  return (
    <ReactModal
        isOpen={noteModalStates.isShown}
        onRequestClose={() => setNoteModalStates({ ...noteModalStates, isShown: false })}
        style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
        contentLabel="Note Modal"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-1/2 "
      >
    <div className="relative text-sec bg-back rounded p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="hidden" value="" 
        { ...register("_id", { required: false }) }
        /> */}

        <div className="flex flex-col items-start relative">
          <label htmlFor="title" className="uppercase font-bold text-sm">
            Title
          </label>
            <input
              type="text"
              id="title"
              className="bg-back text-lg border-none outline-none w-full mb-2"
              placeholder="Go to Gym at 8:00 AM"
              {...register("title", { required: "Title is required", maxLength: { value: 100, message: "Title must be less than 50 characters" } })}
            />
            {errors.title && <InputErrorSpan>{errors.title.message}</InputErrorSpan>}
        </div>

        <div className="flex flex-col items-start relative">
          <label htmlFor="content" className="uppercase font-bold text-sm">
            Content
          </label>
            <textarea
              id="content"
              rows={10}
              className="w-full border border-divider rounded-lg bg-back p-2 outline-none"
              {...register("content", { required: "Content is required", maxLength: { value: 1000, message: "Content must be less than 1000 characters" } })}
            ></textarea>
            {errors.content && <InputErrorSpan>{errors.content.message}</InputErrorSpan>}
        </div>

        <div className="mt-2 flex flex-col items-start">
          <label htmlFor="tags" className="uppercase font-bold text-sm">
            Tags
          </label>
          <div className="flex justify-center gap-2">
            <input
              type="text"
              id="tagInput"
              className="bg-back text-lg border border-divider outline-none rounded-lg p-1 text-sm"
              placeholder="Add Tag"
            />
            <button
              type="button"
              className="bg-blue-500 text-white rounded-lg p-1"
              onClick={handleAddTag}
            >
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex mt-1 gap-1">
            {watch("tags")?.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-sm px-2 py-1 rounded-lg"
              >
                {tag}{" "}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-red-500 ml-1"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
    </ReactModal>
  );
};

export default NoteFormModal;
