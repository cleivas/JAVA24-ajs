import { useEffect, useState } from "react";
import { AddTask } from "./AddTask";
import { SortFilter } from "./SortFilter";
import { Task } from "./Task";
import { todoRef } from "../firebase/config";
import { onValue } from "firebase/database";


export function App(){
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('default');


    //Filtrera ut alla tasks som är done eller inte done
    const filteredTasks = tasks.filter(task =>{
        if(filter === 'done') return task.done;
        else if(filter === 'notDone') return !task.done;
        else return true;
    })

    //Sortera a-z eller z-a
    const sortedTasks = filteredTasks.toSorted( (a, b)=>{
        if(sort === 'des') return a.task.toLowerCase() > b.task.toLowerCase() ? 1 : -1;
        else if(sort === 'asc') return a.task.toLowerCase() > b.task.toLowerCase() ? -1 : 1;
        else return 0;
    })



    useEffect(()=>{
        onValue(todoRef, snapshot =>{
            // snapshot.val() innehåller firebase-databasen, ett objekt där alla keys är firebaseID:n och alla values är objekt {task: string, done: boolean}
            // Vi gör om databas-objektet till en array med objekt i formatet {id: firebaseID, done: boolean, task: string}

            setTasks(Object.entries(snapshot.val()).map( ([id, obj])=> {return {id, ...obj}}  ) );
        });

    }, [])


    return ( 
        <>
            <AddTask />
            <SortFilter setFilter={setFilter} setSort={setSort}/>

            {sortedTasks.map( ({id, task, done}) => <Task key={id} id={id} task={task} done={done}/>)}

        </>
    )
}