import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';//NOTE: The name HAS to be uppercase first. If not React does not think it is a custom component

const app = props =>{
  const [ personsState, setPersonsState] = useState({
    persons: [
    { name: 'Max', age:'28' },
    {name:'Lulu', age:'15'},
    {name:'Manu', age:'40'}

  ]
});

const switchNameHandler = () =>{
  setPersonsState({
    persons: [
      { name: 'Maximilian', age:'28' },
      {name:'Lulu', age:'15'},
      {name:'Manu', age:'41'},

    ]
  });
};

const [otherState, setOtherState] = useState('some other value');
console.log(personsState,otherState);
    return (
      <div className="App">
       <h1>
        Hola mundo!
       </h1> I'm allowed to do this cause its nested inside the main element
      <br></br>
      <p> <button onClick={switchNameHandler}> Switch Name</button></p>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby is to play videogames!</Person>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    //return(React.createElement('div',{className:'App'},React.createElement('h1',null,'Hola mundo')));//this is the equivalent to the other code.
  }


export default app;
/*
state ={
  persons: [
    { name: 'Max', age:'28' },
    {name:'Lulu', age:'15'},
    {name:'Manu', age:'40'}

  ],
  otherState:'some other value'
}

switchNameHandler = () =>{
  //DONT DO THIS: personsState.persons[0].name='lol';
  personsSetState({
    persons: [
      { name: 'Maximilian', age:'28' },
      {name:'Lulu', age:'15'},
      {name:'Manu', age:'41'}

    ]
  });
}*/