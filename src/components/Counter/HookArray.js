import { useState } from "react";

const HookArray = () => {
    const [item,setItem] = useState([]);

const  addItemHandler = () =>{
//       setItem([...item , {id: item.length ,Number: Math.floor(Math.random() * 10)}]);
//anoyher way:
     const addItem =  {id : item.length , Number : Math.floor(Math.random() *10)};    
     const updateItem = [...item , addItem];
     setItem(updateItem);
  }

    return ( 
        <div>
           <button onClick={addItemHandler}>set item</button>
           {item.map((item) => {
              return <li key={item.id}>{item.Number}</li>;
           })  }
        </div>
     );
}
 
export default HookArray;