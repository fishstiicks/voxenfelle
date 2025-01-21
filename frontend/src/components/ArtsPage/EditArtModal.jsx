import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateArtData } from '../../store/arts';
import { useModal } from '../../context/Modal';

const EditArtModal = ({ art, refreshArts }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal(); 
  const [url, setUrl] = useState(art.url);
  const [character, setCharacter] = useState(art.character);
  const [reference, setReference] = useState(art.reference);
  const [setError] = useState('');

  useEffect(() => {
    setUrl(art.url);
    setCharacter(art.character);
    setReference(art.reference);
  }, [art]);

  const handleSubmit = (e) => {
    e.preventDefault();

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

  const handleClose = () => {
    closeModal();
    setError('');
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
