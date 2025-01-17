import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCharacter } from '../../store/characters';
import { fetchRelationships } from '../../store/relationships';
import { useModal } from '../../context/Modal';
import EditCharacterModal from '../CharacterDetailPage/EditCharacterModal';
import DeleteCharacterModal from '../CharacterDetailPage/DeleteCharacterModal';
import './CharacterDetailPage.css';

function CharacterDetailPage() {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);
  const { setModalContent } = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch the session user
  const sessionUser = useSelector((state) => state.session.user); // Assuming the session user is in the Redux state

  // Select relationships from the store
  const relationships = useSelector((state) => state.relationships || []);

  // Fetch character details
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`/api/characters/${name}`);
        if (!response.ok) {
          throw new Error('Character not found');
        }
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error(error);
        setCharacter(null);
      }
    };

    fetchCharacter();
  }, [name]);

  // Fetch relationships
  useEffect(() => {
    if (name) {
      dispatch(fetchRelationships(name)); // Fetch relationships only if a character name exists
    }
  }, [name, dispatch]);

  const refreshCharacter = async () => {
    try {
      const response = await fetch(`/api/characters/${name}`);
      if (!response.ok) {
        throw new Error('Failed to refresh character');
      }
      const data = await response.json();
      setCharacter(data);
    } catch (error) {
      console.error('Error refreshing character data:', error);
    }
  };

  const handleNameChange = (newName) => {
    if (newName !== name) {
      navigate(`/characters/${newName}`);
    }
  };

  const handleEditClick = () => {
    setModalContent(
      <EditCharacterModal character={character} refreshCharacter={refreshCharacter} handleNameChange={handleNameChange} />
    );
  };

  const handleDeleteClick = () => {
    setModalContent(
      <DeleteCharacterModal character={character} onDelete={handleDelete} />
    );
  };

  const handleDelete = async () => {
    try {
      await dispatch(removeCharacter(character.name));
      navigate('/characters');
    } catch (error) {
      console.error('Error deleting character:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (!character) {
    return <p>Loading...</p>; // Make sure to handle the loading state
  }

  return (
    <div className="main-content">
      <div className="character-links">
        <a href={`/characters/${name}/relations`}>Relations</a>
        <a href={`/characters/${name}/art`}>Art</a>
        {/* Render Edit and Delete buttons only if the character.mun equals sessionUser.username */}
        {character.mun === sessionUser?.username && (
          <>
            <button onClick={handleEditClick}>Edit Character</button>
            <button onClick={handleDeleteClick}>Delete Character</button>
          </>
        )}
      </div>

      <div id="char-middle">
        <div className="character-header">
          <img
            src={character.picrew}
            alt={character.name}
            className="char-image"
          />
          <span id="character-title">{character.name}</span>
        </div>
        <div id="character-reputation">
          {character.reputation}
        </div>
        <div id="char-stats">
          <b>STR: </b> {character.str} | <b>DEX: </b> {character.dex} | <b>CON: </b> {character.con} | <b>CHA: </b> {character.cha} | <b>INT: </b> {character.int} | <b>MAG: </b> {character.mag}
        </div>
        <hr />
        <div id="char-info">
          <div id="character-long-info">
            <div className="char-box">
              <h2 className="char-long-header">WEAPON</h2>
              {character.weapon}
            </div>
            <div className="char-box">
              <h2 className="char-long-header">POWER</h2>
              {character.power}
            </div>
          </div>
          <div id="character-short-info">
            <p><b>Full Name:</b> {character.fullName}</p>
            <p><b>Pronouns:</b> {character.pronouns}</p>
            <p><b>Height:</b> {character.height} cm</p>
            <p><b>Class:</b> {character.class}</p>
            <p><b>Dorm:</b> {character.dorm}</p>
            <p><b>Lineage:</b> {character.lineage}</p>
            <p><b>Source:</b> {character.source}</p>
          </div>
        </div>
        <hr />
      <div id="reviews-section">
        <h2>COMMENTS FROM...</h2>
        {relationships && relationships.length > 0 ? (
          <ul>
            {relationships.map((rel) => (
              <li key={rel.id} id="review-tile">
                <Link to={`/characters/${rel.you}`}><img src={rel.youPicrew} alt={rel.you} id="review-image" /></Link>
                <div id="review-text">
                    <b id="review-name">{rel.you}</b> 
                    <p><b id="review-special">{rel.special} </b>{rel.description}</p>
                    <p id="review-date"><i>Last updated: {formatDate(rel.updatedAt)}</i></p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No relationships found for this character.</p>
        )}
      </div>
      </div>

      <div className="fixed-gradient"></div>
    </div>
  );
}

export default CharacterDetailPage;
