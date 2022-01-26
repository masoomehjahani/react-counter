import {useState} from "react";
// ** in class or function : if update state based on previuse state =>  must use callBack function
const HookCounter = () => {
    const [count,setCount] = useState(0);

  const addOneHandler = () =>{
    setCount(count + 1);
    // safe tare ke call back func bashe:
    setCount(prevCount => prevCount + 1);
    }
    const addFiveHandler = () =>{
        for (let i = 0; i < 5; i++) {
            //callBack function
            setCount((prevCount) => {
              return  prevCount + 1;
            });       
        }
       
        }
    return ( 
         <div>
               <h1>count : {count}</h1>
               <button onClick={addOneHandler}>add one</button>
               <button onClick={addFiveHandler}>add Five</button>
         </div>
    );
}
 
export default HookCounter;