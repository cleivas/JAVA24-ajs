import { handleDelete, handleToggleDone } from "./eventhandlers.js";

export function createTaskCards(tasksObj){
    // console.log(tasksObj);
   
    const tasksContainer = document.querySelector('#tasksContainer');
    tasksContainer.innerHTML = '';

    for(const firebaseID in tasksObj){
        const task = tasksObj[firebaseID];
        // console.log(firebaseID, task)

        const taskDiv = document.createElement('div');
        const taskP = document.createElement('p');

        taskDiv.classList.add('task-card');
        taskDiv.id = firebaseID;
        
        taskP.innerText = task.task;
        taskP.addEventListener('click', handleToggleDone(firebaseID, !task.done))

        taskDiv.append(taskP);

        if(task.done){
            taskDiv.classList.add('done');
            
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'X';
            deleteBtn.addEventListener('click', handleDelete(firebaseID))

            taskDiv.append(deleteBtn);
        }

        tasksContainer.append(taskDiv);
    }

}