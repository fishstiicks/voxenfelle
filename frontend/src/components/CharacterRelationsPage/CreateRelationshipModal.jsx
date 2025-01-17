import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRelationship } from '../../store/relationships';
import { useModal } from '../../context/Modal';

const CreateRelationshipModal = ({ characterName, otherCharacterName, refreshRelationships }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [special, setSpecial] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const relationshipData = { special, description };
    dispatch(createRelationship(characterName, otherCharacterName, relationshipData))
      .then(() => {
        closeModal();
        refreshRelationships();
      });
  };

  const handleClose = () => {
    closeModal();
    setSpecial('');
    setDescription('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Relationship</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="special"><span>Title</span></label>
            <input
              type="text"
              id="special"
              value={special}
              onChange={(e) => setSpecial(e.target.value)}
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

          <div className="form-buttons">
            <button type="submit">Create Relationship</button>
            <button type="button" onClick={handleClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRelationshipModal;
