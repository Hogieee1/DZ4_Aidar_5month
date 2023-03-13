import { createStore } from 'redux';

const initialState = {
  password: '',
  accessGranted: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PASSWORD_CHAR':
      return {
        ...state,
        password: state.password + action.char
      };
    case 'REMOVE_PASSWORD_CHAR':
      return {
        ...state,
        password: state.password.slice(0, -1)
      };
    case 'CLEAR_PASSWORD':
      return {
        ...state,
        password: ''
      };
    case 'SET_ACCESS_GRANTED':
      return {
        ...state,
        accessGranted: true
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
