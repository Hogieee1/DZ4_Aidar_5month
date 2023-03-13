import React from 'react';
import { useSelector } from 'react-redux';
import PasswordInput from './components/PasswordInput';
import Keypad from './components/Keypad';
import './App.css'

function App() {
  const accessGranted = useSelector(state => state.accessGranted);

  return (
    <div className={`app ${accessGranted ? 'access-granted' : ''}`}>
      <h1>Door Lock</h1>
      <PasswordInput />
      <Keypad />
      {accessGranted && <div className="access-granted-message">Access Granted</div>}
    </div>
  );
}

export default App;
