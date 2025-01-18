const DeleteClubModal = ({ club, onDelete, closeModal }) => {
  const handleDelete = () => {
    onDelete(club.id);
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Are you sure you want to delete {club.name}?</h2>
        <p>This cannot be undone.</p>
        <p>NOTE: Deleting a club will not remove historical memberships, but it will prevent additional ones.</p>

        <div className="modal-buttons">
          <button onClick={handleDelete} className="delete-btn">Delete</button>
          <button onClick={() => closeModal()} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteClubModal;
