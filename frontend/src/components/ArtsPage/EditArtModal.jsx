import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateArtData } from '../../store/arts'; // Import the updateArtData action
import { useModal } from '../../context/Modal'; // Assuming you have a context to handle modal close

const EditArtModal = ({ art, refreshArts }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal(); // To close the modal after success
  const [url, setUrl] = useState(art.url);
  const [character, setCharacter] = useState(art.character);
  const [reference, setReference] = useState(art.reference);
  const [error, setError] = useState(''); // Track any error during update

  useEffect(() => {
    // Reinitialize form fields if art prop changes (e.g., if a different art is passed for editing)
    setUrl(art.url);
    setCharacter(art.character);
    setReference(art.reference);
  }, [art]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation check to ensure url, character, and reference aren't empty
    if (!url.trim() || !character.trim()) {
      setError('URL and Character are required.');
      return;
    }

    const updatedArtData = { url, character, reference };
    dispatch(updateArtData(art.id, updatedArtData))
      .then(() => {
        closeModal();
        refreshArts();
      })
      .catch(() => {
        setError('An error occurred while updating the art.');
      });
  };

  // Close the modal without making changes
  const handleClose = () => {
    closeModal();
    setError(''); // Reset any existing error when closing
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Art</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="artUrl"><span>Art URL</span></label>
            <input
              type="text"
              id="artUrl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="character"><span>Character</span></label>
            <input
              type="text"
              id="character"
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <div className="checkbox">
            <label htmlFor="reference"><span>Is this a reference?</span></label>
            <input
              type="checkbox"
              id="reference"
              checked={reference}
              onChange={(e) => setReference(e.target.checked)}
            />
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit">Update Art</button>
            <button type="button" onClick={handleClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArtModal;
