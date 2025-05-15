import { child, remove, update } from "firebase/database";
import { todoRef } from "../firebase/config";

export function Task({done, task, id}){
    const taskRef = child(todoRef, id);
    
    function toggleDone(event){
        update(taskRef, {done: !done});
    }

    function handleRemove(event){
        remove(taskRef)
    }


    return(
        <div className='task'>
            <p onClick={toggleDone} className={done ? 'done':''}>{task}</p>
            {done && <button onClick={handleRemove}>X</button>}
        </div>
    )
}