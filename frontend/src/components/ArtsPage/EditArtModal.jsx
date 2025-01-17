import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateArtData } from '../../store/arts'; // Import the action to update art
import { useModal } from '../../context/Modal'; // Assuming you have a context to handle modal close

const EditArtModal = ({ art, refreshArts }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal(); // To close modal after success
  const [url, setUrl] = useState(art.url);
  const [character, setCharacter] = useState(art.character);
  const [reference, setReference] = useState(art.reference || false); // Assuming reference is a boolean (true or false)
  const [error, setError] = useState('');
  const [mun, setMun] = useState(art.mun); // Set the 'mun' value from the current art data

  useEffect(() => {
    // Reinitialize form fields if art prop changes (e.g., if a different art is passed for editing)
    setUrl(art.url);
    setCharacter(art.character);
    setReference(art.reference || false); // Ensure reference is boolean (false if undefined)
    setMun(art.mun); // Ensure 'mun' is kept in sync
  }, [art]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation check to ensure URL and character aren't empty
    if (!url.trim() || !character.trim()) {
      setError('URL and Character are required.');
      return;
    }

    const updatedArtData = { url, character, reference, mun };
    dispatch(updateArtData(art.id, updatedArtData))
      .then(() => {
        closeModal();
        refreshArts();
      })
      .catch((err) => setError('Something went wrong during update.'));
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
            <label htmlFor="artUrl">URL</label>
            <input
              type="text"
              id="artUrl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="character">Character</label>
            <input
              type="text"
              id="character"
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reference">Is this a reference?</label>
            <input
              type="checkbox"
              id="reference"
              checked={reference}
              onChange={(e) => setReference(e.target.checked)} // Toggle the reference state
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="form-buttons">
            <button type="submit">Update Art</button>
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArtModal;
