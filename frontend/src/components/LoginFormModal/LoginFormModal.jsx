import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  const loginAsDemo = async (e) => {
    e.preventDefault();
    const demoUser = {
      credential: 'Demo-lition',
      password: 'password'
    };

      await dispatch(sessionActions.login(demoUser))
      .then(closeModal)
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {errors.credential && (
          <p>{errors.credential}</p>
        )}
        <button type="submit">Log In</button>

        <button onClick={loginAsDemo} className="demo-login-btn">
            <u>Log in as Demo User</u>
      </button>
      </form>
    </>
  );
}

export default LoginFormModal;