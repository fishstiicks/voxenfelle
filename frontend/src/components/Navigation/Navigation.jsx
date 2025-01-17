import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../context/Modal';  // Importing useModal hook
import OpenModalButton from '../OpenModalButton/OpenModal.jsx';  // Import for modal buttons
import LoginFormModal from '../LoginFormModal/LoginFormModal.jsx';  // Login modal
import SignupFormModal from '../SignupFormModal/SignupFormModal.jsx';  // Signup modal
import CreateCharacterModal from '../CreateCharacterModal/CreateCharacterModal.jsx'; 

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const { setModalContent, openModal } = useModal();  // Destructure to open modal and set content

  const openCreateCharacterModal = () => {
    setModalContent(<CreateCharacterModal />); 
    openModal();
  };

  // Function for logging out
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <ul className="navigation-list">      
      {isLoaded && (
        <>
          {sessionUser && (
            <>
              <div id="welcome"><li>Welcome, <span className="username">{sessionUser.username}</span> !</li></div>
              <br></br>
              <li>
                <button onClick={openCreateCharacterModal}>Create Character</button>
              </li>
              <li>
                <button onClick={logout}>Log Out</button>
              </li>
            </>
          )}

          {/* Display Login and Signup links if the user is not logged in */}
          {!sessionUser && (
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
          )}
        </>
      )}
    </ul>
  );
}

export default Navigation;
