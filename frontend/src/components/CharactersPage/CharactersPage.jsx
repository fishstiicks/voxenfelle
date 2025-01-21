import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../store/characters';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/Modal'; 
import './CharactersPage.css';
import CreateCharacterModal from '../CreateCharacterModal/CreateCharacterModal.jsx'; 

function CharactersPage() {
  const dispatch = useDispatch();
  const { setModalContent } = useModal(); 
  const characters = useSelector((state) => state.characters.characters) || [];

  const [filterState, setFilterState] = useState({ PC: false, NPC: false });
  const [filterSource, setFilterSource] = useState({ Aura: false, Void: false });

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const refreshCharacters = () => {
    dispatch(fetchCharacters());
  };

  const filteredCharacters = characters.filter((character) => {
    const matchesState =
      (filterState.PC && character.state === 'PC') || (filterState.NPC && character.state === 'NPC') || (!filterState.PC && !filterState.NPC);

    const matchesSource =
      (filterSource.Aura && character.source === 'Aura') || (filterSource.Void && character.source === 'Void') || (!filterSource.Aura && !filterSource.Void);

    return matchesState && matchesSource;
  });

  const handleStateChange = (e) => {
    setFilterState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSourceChange = (e) => {
    setFilterSource((prevSource) => ({
      ...prevSource,
      [e.target.name]: e.target.checked,
    }));
  };

  const openCreateCharacterModal = () => {
    setModalContent(<CreateCharacterModal refreshCharacters={refreshCharacters}/>);
  };

  return (
    <div className="main-content">
        <div id="char-page-header">
        <div className="filter-box">
          <h3>FILTER</h3>
          <label>
            <input
              type="checkbox"
              name="PC"
              checked={filterState.PC}
              onChange={handleStateChange}
            />
            PC
          </label>
          <label>
            <input
              type="checkbox"
              name="NPC"
              checked={filterState.NPC}
              onChange={handleStateChange}
            />
            NPC
          </label>
          <label>
            <input
              type="checkbox"
              name="Aura"
              checked={filterSource.Aura}
              onChange={handleSourceChange}
            />
            Aura
          </label>
          <label>
            <input
              type="checkbox"
              name="Void"
              checked={filterSource.Void}
              onChange={handleSourceChange}
            />
            Void
          </label>
        </div>

        <button className="create-btn" onClick={openCreateCharacterModal}>Create Character</button>
        </div>

      <div className="character-list">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => {
            const displayHex = character.source === 'Void' ? '#c21c1c' : character.hexcode;

            return (
              <div key={character.id} className="character-item">
                <Link to={`/characters/${character.name}`}>
                  <img
                    style={{
                      backgroundColor: `${displayHex}`,
                    }}
                    src={character.picrew}
                    alt={character.name}
                    className="character-image"
                  />
                  <div id="character-name-pronouns">
                    {character.source === 'Void' ? (
                      <div id="character-bar" style={{ color: '#c21c1c' }}>✖</div>
                    ) : (character.source !== 'None' && (
                      <div id="character-bar" style={{ color: displayHex }}>✦</div>
                    ))}
                    <div id="character-name">{character.name}</div>
                  </div>
                  <div className="character-info"><i>{character.fullName}</i></div>
                  <div id="character-pronouns"><i>{character.pronouns}</i></div>
                </Link>
              </div>
            );
          })
        ) : (
          <p>No characters available.</p>
        )}
      </div>

      
    </div>
  );
}

export default CharactersPage;
