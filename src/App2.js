
import CounterClass from "./components/Counter/ClassCounter";
import HookArray from "./components/Counter/HookArray";
import HookObject from "./components/Counter/HookObject";
//  import HookCounter from "./components/Hook/HookCounter";

function App ()  {
    return ( 
           <div className="app">
            {/* <CounterClass/> */}
            {/* <HookObject/> */}
            <HookArray/>
            </div> 
            );
}
 
export default App;