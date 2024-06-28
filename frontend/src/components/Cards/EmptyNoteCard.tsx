import { PencilLine, PinIcon, Trash } from 'lucide-react';

const EmptyBlock = ({className}: {className: string}) => {
  return (
    <div className=''>
      <div className={`bg-fore-sec animate-pulse ${className} rounded`}>
        &nbsp;
      </div>
    </div>
  )
}

const EmptyNoteCard= () => {
  return (
    <div className={`flex flex-col px-4 py-2 rounded border border-divider animate-pulse bg-fore-pri`}>
      <div className='flex justify-between items-center'>
        <div className='flex-1'>
          <h6 className='text-pri text-md font-medium'><EmptyBlock className='w-1/2'/></h6>
          <p className='text-xs text-tri'>dd/MM/yy HH:mm</p>
        </div>
        <div className='text-tri'>
          <PinIcon className='h-5 w-5 cursor-pointer hover:text-blue-500'/>
        </div>
      </div>
      <p className='text-sm line-clamp-3 mt-2 flex-1 text-pri'><EmptyBlock className='w-2/6'/> <EmptyBlock className='w-4/6'/> <EmptyBlock className='w-6/6'/></p>
      <div className='flex justify-between items-center mt-2 text-tri'>
        <div className='flex gap-2 text-sm'>
          #<EmptyBlock className='w-10'/> #<EmptyBlock className='w-10'/> #<EmptyBlock className='w-10'/>
        </div>
        <div className='flex gap-2'>
          <button className='hover:text-blue-500'><PencilLine className='h-4 w-4' /></button>
          <button className='hover:text-red-500'><Trash className='h-4 w-4' /></button>
        </div>
      </div>
    </div>
  );
};

export default EmptyNoteCard;
