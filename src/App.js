import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';//NOTE: The name HAS to be uppercase first. If not React does not think it is a custom component

class App extends Component {
  state ={
    persons: [
      { name: 'Max', age:'28' },
      {name:'Lulu', age:'15'},
      {name:'Manu', age:'40'}

    ],
    otherState:'some other value'
  }

  switchNameHandler = () =>{
    //DONT DO THIS: this.state.persons[0].name='lol';
    this.setState({
      persons: [
        { name: 'Maximilian', age:'28' },
        {name:'Lulu', age:'15'},
        {name:'Manu', age:'41'}
  
      ]
    });
  }

  render() {
    return (
      <div className="App">
       <h1>
        Hola mundo!
       </h1> I'm allowed to do this cause its nested inside the main element
      <br></br>
      <p> <button onClick={this.switchNameHandler}> Switch Name</button></p>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is to play videogames!</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return(React.createElement('div',{className:'App'},React.createElement('h1',null,'Hola mundo')));//this is the equivalent to the other code.
  }
}

export default App;
