import React, {PureComponent } from 'react';

class PureCmp extends PureComponent {
    // get precState and PreveProps and compare whith value =>if dont change => dont rerender cmp
    // optimization by shouldcomponentwillupdate ,pure class handell this by default
    render() { 
        console.log("pure!");
        return <div>
            pure cmp {this.props.name}
        </div>;
    }
}
 
export default PureCmp;