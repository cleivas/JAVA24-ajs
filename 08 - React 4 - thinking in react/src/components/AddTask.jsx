import { push, update, child } from "firebase/database";
import { todoRef } from "../firebase/config";

export function AddTask(){
    let tempTask = '';

    function handleSubmit(event){
        event.preventDefault();
        console.log(tempTask);

        
        if(tempTask){
            const newID = push(todoRef).key; //genererar nytt firebase ID
            const newRef = child(todoRef, newID); //skapar en firebase-databas-referens till /todo/newID
            update(newRef, {task: tempTask, done: false} );
        } 
            

        event.target.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={event => tempTask = event.target.value } type="text" required/>
            <button>Add task</button>
        </form>
    )
}