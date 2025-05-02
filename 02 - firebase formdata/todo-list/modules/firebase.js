const BASE_URL = "https://webb23-1babd-default-rtdb.europe-west1.firebasedatabase.app/todo-list/"

export async function fetchAllTasks(){
    const url = BASE_URL + '.json';
    try{
        const response = await fetch(url);
        if(response.ok){
            const tasks = await response.json();
            return tasks;
        }
        else{
            throw new Error(response.status + ' ' + response.statusText);
        }

    }
    catch(error){
        throw error;
    }
}

export async function postTask(task){
    const url = BASE_URL + '.json';
    const options = {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-type": "application/json"
        }
    }

    try{
        const response = await fetch(url, options);
        if(response.ok){
            const firebaseID = await response.json();
            return firebaseID;
        }
        else{
            throw new Error(response.status + ' ' + response.statusText);
        }

    }
    catch(error){
        throw error;
    }
}
export async function patchDone(id, done){
    const url = BASE_URL + `${id}.json`;
    const options = {
        method: "PATCH",
        body: JSON.stringify({done}),
        headers: {
            "Content-type": "application/json"
        }
    }

    try{
        const response = await fetch(url, options);
        if(response.ok){
            const patchedObj = await response.json();
            return patchedObj;
        }
        else{
            throw new Error(response.status + ' ' + response.statusText);
        }
    }
    catch(error){
        throw error;
    }
}
export async function deleteTask(id){
    const url = BASE_URL + `${id}.json`;
    const options = {
        method: "DELETE",
    }

    try{
        const response = await fetch(url, options);
        if(response.ok){
           await response.json(); //always null
        }
        else{
            throw new Error(response.status + ' ' + response.statusText);
        }
    }
    catch(error){
        throw error;
    }
}