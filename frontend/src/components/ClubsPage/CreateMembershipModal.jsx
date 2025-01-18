import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createMembership } from '../../store/clubs';
import { useModal } from '../../context/Modal';

const CreateMembershipModal = ({ clubName, refreshMembers, munName }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [characterName, setCharacterName] = useState('');
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      if (!munName) {
        setError('Mun name is missing.');
        return;
      }

      try {
        const response = await fetch(`/api/characters/mun/${munName}`);
        const data = await response.json();

        if (response.ok) {
          setCharacters(data.characters || []);
        } else {
          setError(data.message || 'Failed to load characters.');
        }
      } catch (error) {
        setError('An error occurred while fetching characters.');
      }
    };

    fetchCharacters();
  }, [munName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!characterName) {
      setError('Please select a character.');
      return;
    }

    dispatch(createMembership(clubName, characterName))
      .then(() => {
        closeModal();
        refreshMembers();
      })
      .catch((err) => {
        setError('Failed to create membership.');
        console.error(err);
      });
  };

  const handleClose = () => {
    closeModal();
    setCharacterName('');
    setError('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Membership</h2>
        {error && <p className="error-message">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="characterName"><span>Character Name</span></label>
            <select
              id="characterName"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              required
            >
              <option value="">Select Character</option>
              {characters.length > 0 ? (
                characters.map((character) => (
                  <option key={character.id} value={character.name}>
                    {character.name}
                  </option>
                ))
              ) : (
                <option value="" disabled>No characters available</option>
              )}
            </select>
          </div>

          <div className="form-buttons">
            <button type="submit" disabled={!characterName}>Add Membership</button>
            <button type="button" onClick={handleClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMembershipModal;
