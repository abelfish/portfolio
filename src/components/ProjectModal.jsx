import React from 'react';

function ProjectModal({ open, onClose, children }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0  flex items-center justify-center transition-colors
      ${open ? ' bg-black bg-opacity-50' : 'hidden'}`}
    >
      {/* close button */}

      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white lg:w-11/12 lg:h-2/3 rounded-xl shadow p-6 transition-all ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-0 p-2 text-2xl font-bold text-gray-300 transition-colors rounded-lg right-2 hover:text-gray-600"
        >
          x
        </button>{' '}
      </div>
    </div>
  );
}

export default ProjectModal;
