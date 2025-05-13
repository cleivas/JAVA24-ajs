import { useState } from "react";

export default function(){
    const [cssClass, setCssClass] = useState('');

    // För att visa hur vi kan använda inline styling i en component
    let style = {
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center'
    };

    function handleMouseEnter(event){
        setCssClass( event.target.innerText);
        console.log(cssClass)
    }

    return(
        <div style={style} className={cssClass}>
            <button onMouseEnter={handleMouseEnter}>hotpink</button>
            <button onMouseEnter={handleMouseEnter}>skyblue</button>
            <button onMouseEnter={handleMouseEnter}>violet</button>
        </div>
    )
}