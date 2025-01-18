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
  const [clubs, setClubs] = useState([]); // Added state for clubs
  const { setModalContent } = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sessionUser = useSelector((state) => state.session.user); 
  const relationships = useSelector((state) => state.relationships || []);

  const convertCm = (cm) => {
    const inches = cm * 0.393701;
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    return `${feet}' ${remainingInches}"`;
  };

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
        setCharacter(null);
      }
    };

    fetchCharacter();
  }, [name]);

  // Fetch clubs data when character is loaded
  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch(`/api/characters/${name}/clubs`);
        if (!response.ok) {
          throw new Error('Clubs not found');
        }
        const data = await response.json();
        setClubs(data.Memberships || []);
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };

    if (character) {
      fetchClubs();
    }
  }, [name, character]);

  useEffect(() => {
    if (name) {
      dispatch(fetchRelationships(name));
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
      <EditCharacterModal character={character} refreshCharacter={refreshCharacter} handleNameChange={handleNameChange}
      convertCm={convertCm} />
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
    return <p>Loading...</p>;
  }

  const displayHex = character.source === 'Void' ? '#c21c1c' : character.hexcode;

  return (
    <div className="main-content">
      <div className="character-links">
        <p id="char-link-name" className="character-name">{name}</p>
        <a href={`/characters/${name}`}>Profile</a>
        <a href={`/characters/${name}/relations`}>Relations</a>
        <a href={`/characters/${name}/art`}>Art</a>
        <a href={`/users/${character.mun}/characters`}>Mun</a>

        {character.mun === sessionUser?.username && (
          <div>
            <button className="char-link-btn" onClick={handleEditClick}>Edit Character</button>
            <button className="char-link-btn" onClick={handleDeleteClick}>Delete Character</button>
          </div>
        )}
      </div>

      <div id="char-middle">
        <div className="character-header">
          <div style={{ border: `3px solid ${displayHex}`, borderRadius: '200px', height: '200px', backgroundColor: `${displayHex}` }}>
            <img
              src={character.picrew}
              alt={character.name}
              className="char-image"
            />
          </div>

          <div id="character-header-text">
            <div id="character-title">{character.name}</div>

            <div id="character-reputation">
              {character.reputation}
            </div>

            <div id="char-stats">
              <b>STR: </b> {character.str} | <b>DEX: </b> {character.dex} | <b>CON: </b> {character.con} | <b>CHA: </b> {character.cha} | <b>INT: </b> {character.int} | <b>MAG: </b> {character.mag}
            </div>
          </div>
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

            <div id="char-box">
            <h2 className="char-long-header">CLUBS</h2>
            {clubs.length > 0 ? (
                <ul id="clubs-list">
                {clubs.map((membership) => (
                    <li key={membership.id} id="club-tile">
                    {membership.club}
                    </li>
                ))}
                    </ul>
                ) : (
                    <p>Not in any clubs.</p>
                )}
            </div>
          </div>

          <div id="character-short-info">
            <p><b>Full Name:</b> {character.fullName}</p>
            <p><b>Pronouns:</b> {character.pronouns}</p>
            <p><b>Height:</b> {character.height} cm / {convertCm(character.height)}</p>
            <p><b>Class:</b> {character.class}</p>
            <p><b>Dorm:</b> {character.dorm}</p>
            <p><b>Lineage:</b> {character.lineage}</p>
            <p><b>Source:</b> {character.source}</p>
            <p><b>Mun:</b> {character.mun}</p>
            {character.hexcode && (<p><b>Hex:</b> {character.hexcode}</p>)}
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
