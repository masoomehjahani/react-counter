import React, { Component } from 'react';
// clean up in class component
class ClassTimer extends React.Component {

    state ={
        count : 0,
    };

    componentDidMount (){
        // set property mytimer to class
        this.myTimer=setInterval(() => {
       console.log("hi mastan");
       this.setState({count : this.state.count +1});
   }, 1000)
};

// clean up when component unmount(when element hide!)
componentWillUnmount() {
    console.log("cwun");
    clearInterval(this.myTimer);
}

    render() { 
        return <div>
            class interval
        </div>;
    }
}
 
export default ClassTimer;