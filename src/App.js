import React from 'react';
import Commetary from './components/Commentary';
import Greeting from './components/gretting';


function App() {

  const people = {
    name:'Daniela',
    urlImage:'https://via.placeholder.com/64',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
  return (
    <div className="mt-5">
      <h1>Props in components</h1>
      <Greeting person = "Moises" age={38} />
      <Greeting person = "Pedro" age={26} />
      <Commetary people={people}/>
      <Commetary people={people}/>
    </div>
  );
}

export default App;
