import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PasswordInput() {
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newPassword = e.target.value.slice(0, 4);
    if (/^\d{0,4}$/.test(newPassword)) {
      dispatch({ type: 'ADD_PASSWORD_CHAR', payload: newPassword });
    }
  };

  const handleBackspace = () => {
    dispatch({ type: 'REMOVE_PASSWORD_CHAR' });
  };

  const handleEnter = () => {
    const correctPassword = '1234';
    if (password === correctPassword) {
      dispatch({ type: 'SET_ACCESS_GRANTED' });
    } else {
      dispatch({ type: 'CLEAR_PASSWORD' });
    }
  };

  return (
    <div className="password-input">
      <input
        type="password"
        value={password}
        onChange={handleChange}
        maxLength="4"
        readOnly
      />
      <button onClick={handleBackspace}>-</button>
      <button onClick={handleEnter}>E</button>
    </div>
  );
}

export default PasswordInput;
