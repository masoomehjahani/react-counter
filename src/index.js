// index.js is entry point program
import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import App2 from "./App2";

//import a file not a component for css
import "./index.css";

// const element = React.createElement("div" ,
//  {id:"title", className:"app-title"},
//  "this is my first");

//  ReactDOM.render(element , document.getElementById("root"));

 // for component : must use function and class

 // this is a componnet (can be a function or an class)
 // component PascalCase
 // components must creat in diffrent file (modular)
//  const App = () =>{
//      return 
//      React.createElement("div" ,
//      {id:"title", className:"app-title"},
//       "this is my first");
//  }
 //for function say "call" : app()
 // for component say  "render" : <app/> => jsx :javascript xml(js+html)
 ReactDOM.render(<App name="ali" /> , document.getElementById("root"));

