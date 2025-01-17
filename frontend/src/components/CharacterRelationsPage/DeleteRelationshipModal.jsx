import React from 'react';
import { useModal } from '../../context/Modal';

const DeleteRelationshipModal = ({ relationshipId, onDelete }) => {
    const { closeModal } = useModal();
    
    const handleDelete = async () => {
        try {
            await onDelete(relationshipId);
            closeModal();
        } catch (error) {
            console.error("Error deleting relationship:", error);
        }
    };
    
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Are you sure you want to delete this relationship?</h2>
                <p>This action cannot be undone.</p>
    
                <div className="modal-buttons">
                    <button onClick={handleDelete} className="delete-btn">Delete</button>
                    <button onClick={() => closeModal()} className="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteRelationshipModal;
