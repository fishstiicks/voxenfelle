import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateClubData } from '../../store/clubs';
import { useModal } from '../../context/Modal';

const EditClubModal = ({ club, refreshClubs }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [name, setName] = useState(club.name);
  const [description, setDescription] = useState(club.description || '');
  const [error, setError] = useState('');

  useEffect(() => {
    setName(club.name);
    setDescription(club.description || '');
  }, [club]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Name required.');
      return;
    }

    const updatedClubData = { 
        name, 
        description: description.trim() === '' ? null : description
      };
      
    dispatch(updateClubData(club.id, updatedClubData))
      .then(() => {
        closeModal();
        refreshClubs();
      });
  };

  const handleClose = () => {
    closeModal();
    setError('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Club</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="clubName"><span>Club Name</span></label>
            <input
              type="text"
              id="clubName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description"><span>Description</span></label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="form-buttons">
            <button type="submit">Update Club</button>
            <button type="button" onClick={handleClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditClubModal;
