import React from 'react';
import ReactModal from 'react-modal';

interface AskConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const AskConfirm: React.FC<AskConfirmProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },}}
      contentLabel="Ask Confirm Modal"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
    >
      <div className='relative text-sec bg-back rounded p-4'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='text-gray-600'>{message}</p>
        <div className='flex justify-end mt-4'>
          <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2'>
            Cancel
          </button>
          <button onClick={onConfirm} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            Confirm
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default AskConfirm;