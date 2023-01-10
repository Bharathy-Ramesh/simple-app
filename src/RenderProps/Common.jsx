import React, { useState } from "react";

function Common(props) {
    const [multi, setMulti] = useState(1);
    const clickHandler = () => {
        setMulti(multi + 5);
        return multi;
    } 
    return(
        <>
        {props.render(multi, clickHandler)}
        </>
    )
}

export default Common;