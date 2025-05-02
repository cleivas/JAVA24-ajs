import { handleSubmitTask } from "./modules/eventhandlers.js";
import { fetchAllTasks } from "./modules/firebase.js";
import { createTaskCards } from "./modules/taskcards.js";

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmitTask)

fetchAllTasks()
    .then(createTaskCards)
    .catch(error => console.log(error));