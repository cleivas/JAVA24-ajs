import { useRef } from "react";

export function UseRef(){
    const counter = useRef(0);

    console.log(counter) //ett objekt

    function handleClick(){
        counter.current++;
        alert(counter.current)
    }

    return (
        <button onClick={handleClick}>Count</button>
    )
}