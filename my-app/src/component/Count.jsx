import React, { useState } from "react";


const Count = () => {
    const [color, setColor] = useState("red");

    const changeColor = () => {
        setColor("blue");
    }

    return (
        <div className="background">
            <h2>Hello</h2>
            <p>{color}</p>
            <button onClick={changeColor}>Click</button>
        </div>
    )

}

export default Count;
