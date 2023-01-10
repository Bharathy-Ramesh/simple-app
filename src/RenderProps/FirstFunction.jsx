import React from "react";

function FirstFunction(props) {
    return (
        <div>
            <h1>Multiple of 10 {props.multipleValue}</h1>
            <button onClick={props.clickHandler}>Click me</button>
        </div>
    )
}

export default FirstFunction;