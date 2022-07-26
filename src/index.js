import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import "./index.css"
import App from "./App";

//*here it takes two arguments
//* 1) one is the component which we need to render on the browser (we need to pass the root component here)
//* 2) second one is where we gonna put this first component into.......

//* for the first argument we can add strick mode option , which can be used to do some additonal checks
//!this is the old version(ie. react 17)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );


//!THIS is the new version of rendering (react 18)
const root = createRoot(document.getElementById("root"))
root.render(<App/>)