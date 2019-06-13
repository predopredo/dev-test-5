/* eslint no-eval: 0 */
// NPM MODULES
import React, { useState } from 'react';

import './Calculator.css';


const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [canDot, setCanDot] = useState(true)

  const isNumber = (digit) => {
    return /[0-9]/.test(digit);
  };

  const isOperator = (digit) => {
    return /[/,*,\-,+]/.test(digit);
  };

  const getLastDigit = () => {
    return display[display.length - 1]
  };

  const setLastDigit = (string) => {
    setDisplay(display.substring(0, display.length - 1) + string);
  };

  const onNumberPress = (button) => {
    if (display === '0') {
      return setDisplay(button);
    }
    setDisplay(display + button)
  };

  const onOperatorPress = (button) => {
    setCanDot(true);
    const lastDigit = getLastDigit()
    if (isNumber(lastDigit)) {
      setDisplay(display + button);
    } else if (lastDigit !== button) {
      return setLastDigit(button);
    }
  };

  const onBackSpacePress = () => {
    if (display.length === 1) {
      return setDisplay('0')
    }
    return setLastDigit('')
  }

  const onCommaPress = () => {
    const lastDigit = getLastDigit()
    if (canDot) {
      if (isOperator(lastDigit)) {
        setDisplay(display + '0.');
        return setCanDot(false);
      } else if (lastDigit !== '.') {
        setDisplay(display + '.');
        return setCanDot(false);
      }
    }
  };

  const onCalculate = () => {
    const lastDigit = getLastDigit()
    if (isOperator(lastDigit)) {
      return setLastDigit('')
    }
    const result = Math.round(eval(display) * 1000000) / 1000000
    return setDisplay(result.toString())
  };

  const handleClick = (e) => {
    const button = e.target.innerHTML;

    if (button === '=') {
      return onCalculate()
    }

    if (button === '.') {
      return onCommaPress();
    }

    if (button === 'Clear') {
      setDisplay('0')
    }

    if (button === '⬅') {
      onBackSpacePress()
    }

    if (isNumber(button)) {
      onNumberPress(button)
    }

    if (isOperator(button)) {
      onOperatorPress(button)
    }
  };

  const handleKeyPress = (e) => {
    const keyPressed = e.key


    if (keyPressed === 'Enter') {
      return onCalculate()
    }

    if (keyPressed === ',' || keyPressed === '.') {
      return onCommaPress();
    }

    if (keyPressed === 'Delete') {
      setDisplay('0')
    }

    if (keyPressed === 'Backspace') {
      onBackSpacePress()
    }

    if (isNumber(keyPressed)) {
      onNumberPress(keyPressed);
    }

    if (isOperator(keyPressed)) {
      onOperatorPress(keyPressed)
    }
  }

  return (
    <div className="content-container">
      <div className="calculator">
        <div className="calculator__body">
          <div className="calculator__frame">
            <input type="text" autoFocus value={display} onChange={() => ''} onKeyDown={handleKeyPress} className="calculator__display" />
            <div className="calculator__button_row">
              <button className="calculator__button" onClick={handleClick}>7</button>
              <button className="calculator__button" onClick={handleClick}>8</button>
              <button className="calculator__button" onClick={handleClick}>9</button>
              <button className="calculator__button" onClick={handleClick}>/</button>
              <button className="calculator__button" onClick={handleClick}>Clear</button>
            </div>
            <div className="calculator__button_row">
              <button className="calculator__button" onClick={handleClick}>4</button>
              <button className="calculator__button" onClick={handleClick}>5</button>
              <button className="calculator__button" onClick={handleClick}>6</button>
              <button className="calculator__button" onClick={handleClick}>*</button>
              <button className="calculator__button" onClick={handleClick}>⬅</button>
            </div>
            <div className="calculator__button_row">
              <button className="calculator__button" onClick={handleClick}>1</button>
              <button className="calculator__button" onClick={handleClick}>2</button>
              <button className="calculator__button" onClick={handleClick}>3</button>
              <button className="calculator__button" onClick={handleClick}>-</button>
              <button className="calculator__button" onClick={handleClick}>+</button>
            </div>
            <div className="calculator__button_row">
              <button className="calculator__button calculator__button--big_horizontal" onClick={handleClick}>0</button>
              <button className="calculator__button" onClick={handleClick}>.</button>
              <button className="calculator__button calculator__button--big_horizontal" onClick={handleClick}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
