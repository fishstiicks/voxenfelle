import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../store/characters';
import { Link } from 'react-router-dom';
import './CharactersPage.css';

function CharactersPage() {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters.characters) || [];
  const errors = useSelector((state) => state.characters.errors);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className="main-content">
      <div className="character-list">
        {errors && <p className="error-message">{errors}</p>}
        {characters.length > 0 ? (
          characters.map((character) => (
            <div key={character.id} className="character-item">
              <Link to={`/characters/${character.name}`}>
                <img
                  src={character.picrew}
                  alt={character.name}
                  className="character-image"
                />
                <div id="character-name-pronouns">
                    <div id="character-name">{character.name}</div>
                    <div id="character-pronouns"><i>{character.pronouns}</i></div>
                </div>
                <div className="character-info"><i>{character.fullName}</i></div>
              </Link>
            </div>
          ))
        ) : (
          <p>No characters available.</p>
        )}
      </div>
      <div class="fixed-gradient"></div>
    </div>
  );
}

export default CharactersPage;
