
import React, { useState } from 'react';
import './App.css';
import Size from './components/sizes/Size';

function App() {
  const [step, setStep] = useState(1);
  const [size, setSize] = useState('');
  return (
    <div className="App">
      <Size />
    </div>
  );
}

export default App;
