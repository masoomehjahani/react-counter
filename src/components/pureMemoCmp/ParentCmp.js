import React, { Component } from 'react';
import PureCmp from './PureCmp';
import RegCmp from './RegCmp';

class ParentCmp extends React.Component {
    state ={
        name:"mastan",
    }
    // react dont recognize how change state!just by calling set state =>parent and all children get rerender
    // pure class:recognize if by setstate value dont change => dont rerender
    componentDidMount() {
        setInterval(()=>{
            this.setState({name : "mastan"});
        },1000);
    }
    render() { 
        console.log("parent---------");
        return (
        <div>
           parent cmp
           <RegCmp name="reg"/>
           <PureCmp name="pure"/>
        </div>
        );
    }
}
 
export default ParentCmp;