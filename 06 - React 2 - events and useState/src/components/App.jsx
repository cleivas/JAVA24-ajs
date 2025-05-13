import Button from "./Button";
import ColorChange from "./ColorChange";
import { Counter } from "./Counter";
import { Form } from "./Form";
import { Parent } from "./Parent";

export function App(){
    return ( 
        <>
            <Counter/>
            <Parent/>

            <Form/>
            <ColorChange/>
            <Button text='Ett'/>
            <Button text='Två'/>
            <Button text='Tre'/>
        </> 
    )
} 