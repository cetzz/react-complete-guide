import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>
        a
       </h1> //THIS IS JSX
      </div>
    );
    //return(React.createElement('div',{className:'App'},React.createElement('h1',null,'Hola mundo')));//this is the equivalent to the other code.
  }
}

export default App;
