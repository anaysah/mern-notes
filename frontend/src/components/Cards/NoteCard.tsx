import { format } from 'date-fns';
import { PencilLine, PinIcon, Trash } from 'lucide-react';
import React from 'react';

interface NoteCardProps {
  note: Note;
  onEdit?: () => void;
  onDelete?: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note , onEdit, onDelete }) => {
  return (
    <div className='flex flex-col px-4 py-2 rounded border border-divider'>
      <div className='flex justify-between items-center'>
        <div>
          <h6 className='text-pri text-md font-medium'>{note.title}</h6>
          <p className='text-xs text-tri'>{format(note.createdAt, 'dd/MM/yy HH:mm')}</p>
        </div>
        <div>
          <PinIcon className='h-5 w-5 cursor-pointer hover:text-blue-500' />
        </div>
      </div>
      <p className='text-sm line-clamp-3 mt-2 flex-1 text-pri'>{note.content}</p>
      <div className='flex justify-between items-center mt-2 text-tri'>
        <div className='flex gap-2 text-sm'>
          {note.tags.map((item, index) => {return <span key={`note-tag-${index}`}>#{item}</span>})}
        </div>
        <div className='flex gap-2'>
          <button className='hover:text-blue-500' onClick={onEdit}><PencilLine className='h-4 w-4' /></button>
          <button className='hover:text-red-500' onClick={onDelete}><Trash className='h-4 w-4' /></button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
