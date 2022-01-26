import React, { Component } from 'react';

class ClassCounter extends React.Component {
    state = {
        name : "",
        count : 0,
    };
componentDidMount() {
   document.title = `count : ${this.state.count}`; 
};
componentDidUpdate(prevProps, prevState) {
    console.log(prevState.count);
    // behine sazi: call just on count state changes(ینی با تغییر نام در اینپوت فراخوانی نمیشود)
    if (prevState.count !== this.state.count)
    {
    console.log("document title updated");
    document.title = `count : ${this.state.count}`; 
    }
}
    render() { 
        return <div>
          <input type="text" onChange={ (e) => {this.setState({name : e.target.value})}}></input>
          <button onClick={() => {this.setState({count : this.state.count +1})}}>
              count : {this.state.count}</button>
        </div>;
    }
}
 
export default ClassCounter;