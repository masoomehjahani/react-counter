import React, { Component } from 'react';

class RegCmp extends React.Component {
    render() { 
        console.log("reg!");
        return <div>
            reg cmp {this.props.name}
        </div>;
    }
}
 
export default RegCmp;