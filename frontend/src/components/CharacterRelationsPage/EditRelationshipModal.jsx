import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateRelationshipData } from '../../store/relationships';
import { useModal } from '../../context/Modal';

const EditRelationshipModal = ({ characterName, otherCharacterName, currentRelationship, refreshRelationships }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [special, setSpecial] = useState(currentRelationship.special);
  const [description, setDescription] = useState(currentRelationship.description);
  const [error, setError] = useState('');

  useEffect(() => {
    setSpecial(currentRelationship.special);
    setDescription(currentRelationship.description);
  }, [currentRelationship]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim()) {
      setError('Description is required.');
      return;
    }

    const updatedRelationshipData = { special, description };

    dispatch(updateRelationshipData(characterName, otherCharacterName, updatedRelationshipData))
      .then(() => {
        closeModal();
        refreshRelationships();
      })
      .catch((err) => {
        setError('An error occurred while updating the relationship.');
      });
  };

  const handleClose = () => {
    closeModal();
    setError('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Relationship</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="special">Special</label>
            <input
              type="text"
              id="special"
              value={special}
              onChange={(e) => setSpecial(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="form-buttons">
            <button type="submit">Update Relationship</button>
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRelationshipModal;
