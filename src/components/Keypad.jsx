import React from 'react';
import KeypadButton from './KeypadButton';

function Keypad() {
  const handleButtonClick = (value) => {
    console.log(value); 
  };

  return (
    <div className="keypad">
      <div className="keypad-row">
        <KeypadButton value="1" onClick={handleButtonClick} />
        <KeypadButton value="2" onClick={handleButtonClick} />
        <KeypadButton value="3" onClick={handleButtonClick} />
      </div>
      <div className="keypad-row">
        <KeypadButton value="4" onClick={handleButtonClick} />
        <KeypadButton value="5" onClick={handleButtonClick} />
        <KeypadButton value="6" onClick={handleButtonClick} />
      </div>
      <div className="keypad-row">
        <KeypadButton value="7" onClick={handleButtonClick} />
        <KeypadButton value="8" onClick={handleButtonClick} />
        <KeypadButton value="9" onClick={handleButtonClick} />
      </div>
      <div className="keypad-row">
        <KeypadButton value="#" onClick={handleButtonClick} />
        <KeypadButton value="0" onClick={handleButtonClick} />
        <KeypadButton value="*" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default Keypad;