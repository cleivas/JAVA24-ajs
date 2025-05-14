import { ConditionalRendering } from "./ConditionalRendering";
import { DogImage } from "./Dogimage";
import { UseRef } from "./UseRef";

export function App(){
    return ( 
        <>
            <DogImage/>
            <UseRef/>
            <br />
            <ConditionalRendering/>
        </>
    )
}