import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/Modal';  // Importing useModal hook
import OpenModalButton from '../OpenModalButton/OpenModal.jsx';  // Import for modal buttons
import LoginFormModal from '../LoginFormModal/LoginFormModal.jsx';  // Login modal
import SignupFormModal from '../SignupFormModal/SignupFormModal.jsx';  // Signup modal

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [characters, setCharacters] = useState([]);
  const { setModalContent } = useModal();  // Destructure to open modal and set content
  const [error, setError] = useState('');

  // Function for logging out
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    refreshNavigation();
  };

  const fetchCharacters = async () => {
    if (sessionUser?.username) {
      try {
        const response = await fetch(`/api/characters/mun/${sessionUser.username}`);
        const data = await response.json();

        if (response.ok) {
          const pcCharacters = data.characters.filter(character => character.state === "PC");
          setCharacters(pcCharacters);
        } else {
          setError(data.message || 'Failed to load characters.');
        }
      } catch (error) {
        setError('An error occurred while fetching characters.');
      }
    }
  };

  const refreshNavigation = () => {
    fetchCharacters();
  };

  useEffect(() => {
    fetchCharacters();
  }, [sessionUser]);

  return (
    <ul className="navigation-list">      
      {isLoaded && (
        <>
          {sessionUser && sessionUser.username && (
            <>
              <div id="welcome">
                <li>
                  Welcome, <span className="username">
                    <Link to={`/users/${sessionUser.username}/characters`}>
                      {sessionUser.username}
                    </Link>
                  </span> !
                </li>
              </div>
              <div>
                <div id="navbar-picrew-list">
                  {characters.map((character) => {
                    const displayHex = character.source === 'Void' ? '#c21c1c' : character.hexcode;
                    const characterStyle = {
                      backgroundColor: displayHex,
                      border: `3px solid ${displayHex}`,
                      borderRadius: '200px',
                      height: `100px`
                    };

                    return (
                      <Link to={`/characters/${character.name}`} key={character.id}>
                        <div style={characterStyle}>
                          {character.picrew && <img id="navbar-picrew" src={character.picrew} alt={character.name} />}
                          <div id="navbar-char-name">{character.name}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
                <button id="logout-btn" onClick={logout}>Log Out</button>
            </>
          )}

          {!sessionUser || !sessionUser.username ? (
            <>
              <li>
                <OpenModalButton
                  buttonText="Log In"
                  modalComponent={<LoginFormModal />}
                  onButtonClick={() => setModalContent(<LoginFormModal />)}
                />
              </li>
              <li>
                <OpenModalButton
                  buttonText="Sign Up"
                  modalComponent={<SignupFormModal />}
                  onButtonClick={() => setModalContent(<SignupFormModal />)}
                />
              </li>
            </>
          ) : null}
        </>
      )}
    </ul>
  );
}

export default Navigation;
