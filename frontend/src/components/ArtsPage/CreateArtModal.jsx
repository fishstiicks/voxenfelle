import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createArt } from '../../store/arts';
import { useModal } from '../../context/Modal';

const CreateArtModal = ({ refreshArts }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const user = useSelector((state) => state.session.user);
  const userUsername = user ? user.username : null;

  const [url, setUrl] = useState('');
  const [character, setCharacter] = useState('');
  const [reference, setReference] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userUsername) {
      alert('You need to be logged in to submit art.');
      return;
    }

    const artData = { url, character, reference, mun: userUsername };

    dispatch(createArt(artData))
      .then(() => {
        closeModal();
        refreshArts();
      })
      .catch((err) => console.error('Error creating art:', err));
  };

  const handleClose = () => {
    closeModal();
    setUrl('');
    setCharacter('');
    setReference(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Art</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="artUrl"><span>Art URL (<a href="https://imgbb.com/" rel="noopener noreferrer">uploader</a>)</span></label>
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
            <button type="submit">Create Art</button>
            <button type="button" className="cancel-btn" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateArtModal;
