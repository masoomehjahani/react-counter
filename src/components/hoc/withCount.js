
import { useState } from "react";
// cod haye tekrary ke momkene chand ja estefade beshe hame ra dar yek hoc minevisim
// va component ha ra be in hoc pass midim ta update kone(amaliate moshtark ro ru ina anjam bede) va bargardune
const withCount = (WrappedComponent,incrementValue) => {
    return (props)=>{
        const[count,setCount] = useState(0);
        const incrementCount= ()=>{
            setCount(count +incrementValue);
           }
        return(
        <WrappedComponent count={count} incrementCount={incrementCount} {...props}/>
        );
    };
}
 
export default withCount;