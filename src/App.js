import React from 'react';
import Counter from './components/Counter';
import ListNumber from './components/ListNumber';
import Temperature from './components/temperature';
function App() {
  return (
    <div>
      <h1>Hola mundo..!</h1>
      <Counter></Counter>
      <Temperature />
      <ListNumber />
    </div>
  );
}

export default App;
