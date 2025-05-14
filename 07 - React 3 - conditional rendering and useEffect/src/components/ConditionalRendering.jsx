import { useState } from "react";

export function ConditionalRendering(){
    const [status, setStatus] = useState('');

    const handleClick = event => {
        console.log(event.target.innerText.toLowerCase())
        setStatus(event.target.innerText.toLowerCase());
        
    }

    return (
        <>
            <button onClick={handleClick}>Success</button>
            <button onClick={handleClick}>Loading</button>
            <button onClick={handleClick}>Error</button>

            {status === 'success' && <h1>Sökresultatet</h1>}
            {status === 'loading' && <h1>Loading...</h1>}
            {status === 'error' && <h1>Något har gått fel :(</h1>}
        </>
    )
}