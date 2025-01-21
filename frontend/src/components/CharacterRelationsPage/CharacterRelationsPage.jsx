import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../store/characters';
import { fetchRelationship } from '../../store/relationships';
import { Link, useParams } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { deleteRelationshipThunk } from '../../store/relationships';
import CreateRelationshipModal from '../CharacterRelationsPage/CreateRelationshipModal';
import EditRelationshipModal from '../CharacterRelationsPage/EditRelationshipModal';
import DeleteRelationshipModal from '../CharacterRelationsPage/DeleteRelationshipModal';
import './CharacterRelationsPage.css';

function CharacterRelationsPage() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const savedScrollPosition = sessionStorage.getItem('scrollPosition');

  const characters = useSelector((state) => state.characters.characters) || [];
  const relationships = useSelector((state) => state.relationships.relationships) || {};
  const user = useSelector((state) => state.session.user);

  const { setModalContent, openModal } = useModal();
  const [character, setCharacter] = useState(null);

  if (savedScrollPosition) {
    window.scrollTo(0, savedScrollPosition);
  }

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  useEffect(() => {
    if (name) {
      fetch(`/api/characters/${name}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data);
        })
    }
  }, [name]);

  useEffect(() => {
    if (name && characters.length > 0) {
      characters.forEach((character) => {
        dispatch(fetchRelationship(name, character.name));
      });
    }
  }, [dispatch, name, characters]);

  const openCreateRelationshipModal = (otherCharacterName) => {
    sessionStorage.removeItem('scrollPosition');
    if (!relationships[otherCharacterName]) {
      setModalContent(
        <CreateRelationshipModal
          characterName={name}
          otherCharacterName={otherCharacterName}
          refreshRelationships={refreshRelationships}
        />
      )}
  };

  const openEditRelationshipModal = (otherCharacterName) => {
    sessionStorage.removeItem('scrollPosition');
    if (relationships[otherCharacterName]) {
      setModalContent(
        <EditRelationshipModal
          characterName={name}
          otherCharacterName={otherCharacterName}
          currentRelationship={relationships[otherCharacterName]}
          refreshRelationships={refreshRelationships}
        />
      )}
  };

  const openDeleteRelationshipModal = (relationshipId) => {
    sessionStorage.removeItem('scrollPosition');
    setModalContent(
      <DeleteRelationshipModal
        characterName={name}
        relationshipId={relationshipId}
        refreshRelationships={refreshRelationships}
        onDelete={() => handleDelete(relationshipId)}
      />)
  };

  const handleDelete = async (relationshipId) => {
    sessionStorage.removeItem('scrollPosition');
    try {
      sessionStorage.setItem('scrollPosition', window.scrollY);
      await dispatch(deleteRelationshipThunk(name, relationshipId));
      window.location.reload();
    } catch (error) {
      console.error('Error deleting relationship:', error);
    }
  };

  const refreshRelationships = () => {
    sessionStorage.removeItem('scrollPosition');
    if (name && characters.length > 0) {
      characters.forEach((character) => {
        dispatch(fetchRelationship(name, character.name));
      });
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

  return (
    <div className="main-content">
      <div className="character-links">
        <p id="char-link-name" className="character-name">{name}</p>
        <Link to={`/characters/${name}`}>Profile</Link>
        <Link to={`/characters/${name}/relations`}>Relations</Link>
        <Link to={`/characters/${name}/art`}>Art</Link>
        <Link to={`/users/${character.mun}/characters`}>Mun</Link>
      </div>

      <div id="relations-list">
        <div className="character-list">
          {characters.length > 0 ? (
            characters.map((characterItem) => {
              const displayHex = characterItem.source === 'Void' ? '#c21c1c' : characterItem.hexcode;

              return (
                <div key={characterItem.id} className="character-item" title={characterItem.name}>
                  <Link to={`/characters/${characterItem.name}`}>
                    <img
                      style={{
                        backgroundColor: `${displayHex}`,
                      }}
                      src={characterItem.picrew}
                      alt={characterItem.name}
                      className="character-image"
                    />
                    <div id="character-name-pronouns">
                      {characterItem.source === 'Void' ? (
                        <div id="character-bar" style={{ color: '#c21c1c' }}>✖</div>
                      ) : (characterItem.source !== 'None' && (
                        <div id="character-bar" style={{ color: displayHex }}>✦</div>
                      ))}
                      <div id="character-name">{characterItem.name}</div>
                      <div id="character-pronouns"><i>{characterItem.pronouns}</i></div>
                    </div>
                  </Link>

                  <div id="relationship-text">{relationships[characterItem.name] ? (
                    <div>
                      <p className="relationship-info">
                        <span id="special-tag"><b>{relationships[characterItem.name].special} </b></span>
                        <span id="relationship-desc">{relationships[characterItem.name].description}</span>
                        <div id="updated-at">
                          <i>Last updated: {formatDate(relationships[characterItem.name].updatedAt)}</i>
                        </div>
                      </p>
                    </div>
                  ) : (
                    <p></p>
                  )}</div>

                  {user && character && character.mun === user.username && (
                    <div id="relationship-buttons">
                      {relationships[characterItem.name] ? (
                        <>
                          <button onClick={() => openEditRelationshipModal(characterItem.name)} className="grey-btn">
                            Edit Relationship
                          </button>
                          <button onClick={() => openDeleteRelationshipModal(relationships[characterItem.name].id)} className="grey-btn">
                            Delete Relationship
                          </button>
                        </>
                      ) : (
                        <button onClick={() => openCreateRelationshipModal(characterItem.name)} className="grey-btn">
                          Create Relationship
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p>No characters available.</p>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default CharacterRelationsPage;
