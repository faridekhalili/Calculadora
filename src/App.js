import './App.css';
import logo from './image/airflow.svg';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState, useCallback } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = useCallback((val) => {
    setInput((currentInput) => currentInput + val);
  }, []);

  const calculateResult = useCallback(() => {
    setInput(currentInput => {
      if (currentInput) {
        return evaluate(currentInput);
      } else {
        alert('Please enter values to perform the calculations.');
        return currentInput;
      }
    });
  }, []);

  const handleClear = useCallback(() => {
    setInput('');
  }, []);

  return (
    <div className="App">
      <div className='logo-container'>
        <div><strong>Calculator</strong></div>
        <img
        src={ logo }
        className='logo'
        alt='logo' />
      </div> 
      
      <div className='container-calculator'>
        <Screen input={input}/>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>           
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear handleClear={handleClear}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
