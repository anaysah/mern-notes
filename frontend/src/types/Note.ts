interface Note {
  _id?: number;
  title: string;
  content: string;
  isPinned: boolean;
  tags: string[];
  createdAt: string; // or Date if you prefer to handle dates as Date objects
}

interface NoteModalStates {
  isShown: boolean;
  type: "add" | "edit" | "view";
  note: Note | null;
}

interface DeleteModalStates {
  isShown: boolean;
  noteTitle: string;
  noteId: number | undefined;
}