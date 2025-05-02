import { deleteTask, fetchAllTasks, patchDone, postTask } from "./firebase.js";
import { createTaskCards } from "./taskcards.js";

export async function handleSubmitTask(event){
    event.preventDefault();

    const newTask = {
        done: false,
        task: document.querySelector('input').value
    };

    console.log(newTask)
    try{
        await postTask(newTask);
        const tasks = await fetchAllTasks();
        createTaskCards(tasks);
    }
    catch(error){
        console.log(error)
    }
}

export function handleToggleDone(id, done){
    
    return async function(event){
        try{
            await patchDone(id, done);
            const tasks = await fetchAllTasks();
            createTaskCards(tasks);
        }
        catch(error){
            console.log(error)
        }
    }
}

export function handleDelete(id){
    
    return async function(event){
        try{
            await deleteTask(id);
            const tasks = await fetchAllTasks();
            createTaskCards(tasks);
        }
        catch(error){
            console.log(error)
        }
    }
}

