import { onValue, ref, remove, update, push } from "firebase/database";
import { db } from "./js/firebaseconfig";

// console.log(db)
const usersRef = ref(db, '/users'); //Referens till noden users
// console.log(usersRef);


onValue(usersRef, snapshot =>{
    const users = snapshot.val();
    console.log('onValue change', users);
})


const removeBtn = document.querySelector('#remove');
removeBtn.addEventListener('click', ()=>{
    const removeRef = ref(db, '/users/dksfkjsdhf');

    remove(removeRef);
})


const updateAdminBtn = document.querySelector('#updateAdmin');
updateAdminBtn.addEventListener('click', ()=>{
    const updateRef = ref(db, '/users/sdfsdfsdf');

    update(updateRef, {admin: true})
})

const addUserBtn = document.querySelector('#addUser');
addUserBtn.addEventListener('click', ()=>{
    
    const newFirebaseID = push(usersRef).key; //id har genererats men inte lagts till i databasen
    // console.log(newFirebaseID);

    const newUserRef = ref(db, '/users/'+newFirebaseID);
    update(newUserRef, {name: 'Johanna', admin: true});
})