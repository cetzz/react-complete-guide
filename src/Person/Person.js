import React from 'react';

const person = (props)=>{
    return (
    <div>
        <p onClick={props.click}> I'm {props.name}! and I am {props.age} years old</p>
        <p>{(props.children!=null?props.children:'I dont have hobbies.')}</p>    
        
    </div>
    )
}//ternaries can also work btw. But the important part of this is that we need { }
//to output code
export default person;