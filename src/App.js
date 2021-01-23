import React from 'react';
import './App.css';

import Counter from './components/cart-quantity';

function App() {
  return (
    <div className="App">
      <Counter min={1} max={20}/>
    </div>
  );
}

export default App;
