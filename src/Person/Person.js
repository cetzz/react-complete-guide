import React from 'react';

const person = ()=>{
    return <p> I'm a Person! and I am {(Math.round(Math.random())==1?Math.floor(Math.random()*30):'This works too')}</p>
}//ternaries can also work btw. But the important part of this is that we need { }
//to output code
export default person;