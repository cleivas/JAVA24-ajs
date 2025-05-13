import { useState } from "react";

export function Form(){
    const [text, setText] = useState('Detta kommer ändras');
    let tempText = '';

    function handleChange(event){
        tempText = event.target.value;
        console.log(tempText);
    }

    function handleSubmit(event){
        event.preventDefault();
        event.target.reset();
        
        console.log('submit');
        setText(tempText);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text"/>
                <button>Change Text</button>
            </form>
            <h1>{text}</h1>
        </div>
    )
} 