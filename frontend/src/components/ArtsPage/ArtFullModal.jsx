import React from 'react';
import '../ArtsPage/ArtFullModal.css';

function ArtModal({ imageUrl, onClose }) {
  return (
    <div className="art-modal-overlay" onClick={onClose}>
      <div className="art-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} className="art-modal-image" />
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default ArtModal;
