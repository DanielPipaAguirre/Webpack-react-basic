import React, { useState } from 'react';
import '../index.css';

const App = () => {

    const [name, setName] = useState("");

    const handleClick = () => {
        setName("React!")
    }

    return (
        <>
            <h1>Webpack ... {name} </h1>
            <button onClick={handleClick}>
                Saludar
            </button>
        </>
    )
}

export default App;