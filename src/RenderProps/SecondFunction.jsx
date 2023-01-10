import React from "react";

function SecondFunction(props) {
    return (
        <>
            <h1>Multiple of 5 {props.multipleValue}</h1>
            <button onClick={props.clickHandler}>Click me</button>
        </>
    )
}

export default SecondFunction;