import { useModal } from '../../context/Modal';

const DeleteCharacterModal = ({ character, onDelete }) => {
  const { closeModal } = useModal();
  
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Are you sure you want to delete this character?</h2>
        <p><b>{character.name}</b></p>
        <p>This action cannot be undone.</p>

        <div className="modal-buttons">
          <button onClick={handleDelete} className="delete-btn">Delete</button>
          <button onClick={() => closeModal()} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCharacterModal;
