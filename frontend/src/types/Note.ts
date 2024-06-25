interface Note {
  _id?: number;
  title: string;
  content: string;
  isPinned: boolean;
  tags: string[];
  createdAt: string; // or Date if you prefer to handle dates as Date objects
}

interface NoteModalState {
  isShown: boolean;
  type: "add" | "edit";
  note: Note | null;
}

