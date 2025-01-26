import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateArtData } from '../../store/arts';
import { useModal } from '../../context/Modal';

const EditArtModal = ({ art, refreshArts }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal(); 
  const [url, setUrl] = useState(art.url);
  const [character, setCharacter] = useState(art.character);
  const [event, setEvent] = useState(art.event);
  const [reference, setReference] = useState(art.reference);
  const [setError] = useState('');

  useEffect(() => {
    setUrl(art.url);
    setCharacter(art.character);
    setEvent(art.event);
    setReference(art.reference);
  }, [art]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url.trim() || !character.trim()) {
      setError('URL and Character are required.');
      return;
    }

    const updatedArtData = { url, character, event, reference };
    dispatch(updateArtData(art.id, updatedArtData))
      .then(() => {
        closeModal();
        refreshArts();
      })
  };

  const handleClose = () => {
    closeModal();
    setError('');
  };

  const eventList = [`Void's Eve`, `Defense Ministry`, `Hylia's Grace`, `Secret Santa`, `Solstia`]

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
            <label htmlFor="character"><span>Characters</span></label>
            <p className='modal-text'>Separate names by comma.</p>
            <input
              type="text"
              id="character"
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>
            <span>Event</span>
              <select 
              value={event} 
              onChange={(e) => 
              setEvent(e.target.value)} 
              >
             <option value="">None</option>
            {eventList.length > 0 && (
            eventList.map((eventName) => (
              <option key={eventName} value={eventName}>
                {eventName}
              </option>
            ))
          )}
            </select>
        </label>
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
