import React from 'react';
import { useDispatch } from 'react-redux';

function KeypadButton(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    switch (props.value) {
      case '<':
        dispatch({ type: 'REMOVE_PASSWORD_CHAR' });
        break;
      case 'E':
        dispatch({ type: 'CLEAR_PASSWORD' });
        dispatch({ type: 'SET_ACCESS_GRANTED' });
        break;
      default:
        dispatch({ type: 'ADD_PASSWORD_CHAR', char: props.value });
        break;
    }
  };

  return (
    <button onClick={handleClick}>{props.value}</button>
  );
}

export default KeypadButton;
