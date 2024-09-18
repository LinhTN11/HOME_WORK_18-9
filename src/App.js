import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const handleClear = () => {
    setExpression('');
  };

  const handleDelete = () => {
    setExpression(expression.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = eval(expression);
      const roundedResult = Math.round(result * 1e10) / 1e10; 
      setExpression(roundedResult.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleDot = () => {
    const parts = expression.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1]; 

    if (lastPart && !lastPart.includes('.')) {
      setExpression(expression + '.');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{expression}</div>
      <div className="buttons">
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleDot}>.</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
        <img src={require('./images/ptit-logo-inkythuatso-17-14-54-16.jpg')} alt="Logo" />
      </div>
    </div>
  );
}

export default App;
