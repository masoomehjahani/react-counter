import React, { Component } from 'react';

class CounterClass extends React.Component {
    state = {count : 0};
     addOneHandler = ()=>{
  //  this.setState({count : this.state.count +1 })
  //callback:
  this.setState((prevState)=>{
           return{count: prevState.count +1};
      } );
    }
    addFiveHandler = () =>{
        this.setState((prevState)=>{
            return {count: prevState.count +5};
       } );
    }
    render() { 
        return (
            <div>
               <h1>count : {this.state.count}</h1>
               <button onClick={this.addOneHandler}>add one</button>
               <button onClick={this.addFiveHandler}>add Five</button>
            </div>
        );
    }
}
 
export default CounterClass;

