import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';//NOTE: The name HAS to be uppercase first. If not React does not think it is a custom component

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>
        Hola mundo!
       </h1> I'm allowed to do this cause its nested inside the main element
      <br></br>
       <Person name='Max' age='28'/>
       <Person name='Lulu' age='15'>My hobby is to play videogames!</Person>
       <Person name='Manu' age='40'/>
       <Person name='Juan' age='30'/>
      </div>
    );
    //return(React.createElement('div',{className:'App'},React.createElement('h1',null,'Hola mundo')));//this is the equivalent to the other code.
  }
}

export default App;
