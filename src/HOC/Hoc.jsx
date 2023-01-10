import React, { useState } from "react";

function Hoc(OriginalComponent, num) {
    function NewComponent () {
        const [multiple, setMultiple] = useState(1);
        const clickHandler = () => {
            setMultiple(multiple * num)
        }
        return <OriginalComponent multipleValue={multiple} clickHandler={clickHandler}/>
    }
    return NewComponent;
}

export default Hoc;