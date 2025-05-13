import { useState } from "react";
import { Child } from "./Child";

export function Parent(){
    const [cssClass, setCssClass] = useState('');

    return (
        <div className={cssClass}>

            {/* Statets setter skickas ner som en prop så att statet kan uppdateras i child componenten */}
            <h1>Ändra mellan dark och light mode</h1>
            <Child isDarkMode={true} changeDarkMode={setCssClass}/>
            <Child isDarkMode={false} changeDarkMode={setCssClass}/>
        </div>
        
    )
}