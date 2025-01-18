import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../store/characters';
import { Link, useParams } from 'react-router-dom';
import '../UserPages/UserPages.css';

function CharactersPage() {
  const dispatch = useDispatch();
  const { name } = useParams();

  const characters = useSelector((state) => state.characters.characters) || [];
  const errors = useSelector((state) => state.characters.errors);

  const [filterState, setFilterState] = useState({ PC: false, NPC: false });
  const [filterSource, setFilterSource] = useState({ Aura: false, Void: false });

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const filteredCharacters = characters.filter((character) => {
    const matchesMun = character.mun === name;
    
    const matchesState =
      (filterState.PC && character.state === 'PC') || (filterState.NPC && character.state === 'NPC') || (!filterState.PC && !filterState.NPC);

    const matchesSource =
      (filterSource.Aura && character.source === 'Aura') || (filterSource.Void && character.source === 'Void') || (!filterSource.Aura && !filterSource.Void);

    return matchesMun && matchesState && matchesSource;
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

  return (
    <div className="main-content" id="relations-list">
    <div className="character-links">
      <p id="char-link-name" className="character-name">{name}</p>
      <a href={`/users/${name}/characters`}>Characters</a>
      <a href={`/users/${name}/art`}>Art</a>
    </div>
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
      
      <div id="user-chars">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => {
            const displayHex = character.source === 'Void' ? '#c21c1c' : character.hexcode;

            return (
              <div key={character.id} className="user-character-item">
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

      <div className="fixed-gradient"></div>
    </div>
  );
}

export default CharactersPage;
