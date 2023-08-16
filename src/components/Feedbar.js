import React, { useState } from 'react';
import PostModal from './PostModal';

function Feedbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='bg-primaryBackground'>
        <button
          onClick={handleOpenModal}
          className="bg-quinaryAccent hover:bg-senaryHover w-full py-[12px] border text-secondaryText rounded-md border-quaternaryTextLightest"
        >
          Post
        </button>
      </div>
      {isModalOpen && (
        <PostModal
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Feedbar;
