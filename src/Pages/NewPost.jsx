import React, { useState } from 'react';
import SuggestedUser from '../Components/Suggestions/SuggestedUser';

const NewPost = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:ml-[250px] flex  justify-center md:w-[60vw] w-[100vw]">
      <button className="btn absolute" onClick={handleOpenModal}>
        Open modal
      </button>
      {isOpen && (
        <dialog
          id="my_modal_3"
          className=" modal relative mt-10 flex h-fit overflow-hidden bg-red-600 w-[90vw] md:w-[400px]  justify-center items-start"
          open
        >
          <div className="border-white border px-6 py-4 border-opacity-60">
            <form>
              <div className="flex justify-between items-baseline">
                <h1 className="text-xl font-semibold">Create a post.</h1>
                <button
                  className="btn btn-xl btn-circle btn-ghost"
                  onClick={handleCloseModal}
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-5 mt-5">
                <input
                  type="text"
                  className="w-[300px] md:w-[300px] p-2"
                  placeholder="Write a caption"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="border-l-indigo-400"
                />
                <button
                  type="button"
                  className="bg-gray-400 text-black color-change  max-w-fit py-2 px-10 rounded-full"
                >
                  Create a post
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default NewPost;