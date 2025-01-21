import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createClub } from '../../store/clubs';
import { useModal } from '../../context/Modal';

const CreateClubModal = ({ refreshClubs }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const clubData = { name, description };
    dispatch(createClub(clubData))
     .then(() => {
        closeModal();
        refreshClubs();
     })
  };

  const handleClose = () => {
    closeModal();
    setName('');
    setDescription('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Club</h2>
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
            <input
              id="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-buttons">
            <button type="submit">Create Club</button>
            <button type="button" onClick={handleClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClubModal;
