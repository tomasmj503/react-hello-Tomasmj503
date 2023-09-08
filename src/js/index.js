//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let seg = 0
setInterval(() => {
    let one = Math.floor((seg/1) % );
    let two = Math.floor((seg/10) % 10);
    let three = Math.floor((seg/100) % 10);
    let four = Math.floor((seg/1000) % 10);
    let five = Math.floor((seg/10000) % 10);
    let six = Math.floor((seg/100000) % 10);
    seg += 1;
    ReactDOM.render(<Home digit1={one} digit2={two} digit3={three} digit4={four} digit5={five} digit6={six}  />, document.querySelector("#app"));
}, 1000);






