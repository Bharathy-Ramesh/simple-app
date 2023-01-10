import React from "react";
import Hoc from "./Hoc";

function Second({multipleValue, clickHandler}) {
    return (
        <>
         <h5>Multiple of Current Value {multipleValue}</h5>
         <button onClick={clickHandler}>Click me</button>
        </>
    )
}

export default Hoc(Second, 5);