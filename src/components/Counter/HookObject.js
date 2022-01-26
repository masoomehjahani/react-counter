import { useState } from "react";

const HookObject = () => {
    const [user,setUser] =useState({firstName: "" ,lastName:"" });
   
    // if data is object for update must by ... create a copy of comlete object then override pice of object u want ,
    // if override just a pice of object,  other pice of object  get remove
    // at the first clon(copy) of object to dont remove other property

    const onChangeHandler = (e) =>{
      setUser({...user ,firstName : e.target.value})
    }
    const onChangeHandlerLast = (e) =>{
        setUser({...user , lastName : e.target.value})
    }
    return ( 
        <form>
            <input type="text" value={user.firstName} onChange={onChangeHandler}></input>
            <input type="text" value={user.lastName} onChange={onChangeHandlerLast}></input>
            <h2>firstName : {user.firstName}</h2>
            <h2>lastName : {user.lastName}</h2>
            <div>{JSON.stringify(user)}</div>
        </form>
     );
}
 
export default HookObject;