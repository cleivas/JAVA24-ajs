const BASE_URL = "https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main";

const addNameBtn = document.querySelector('#patch');
addNameBtn.addEventListener('click', async event => {

    // Skriv ditt namn i små bokstäver
    const url = BASE_URL + '/clara2.json';

    const options = {
        method: "PATCH",
        body: JSON.stringify({ test: "test" }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
})


async function getAllNames() {
    const response = await fetch(BASE_URL + '.json');
    const mainObject = await response.json();

    // Får ut alla keys i mainObject som en array med strings
    const names = Object.keys(mainObject);
    // console.log(names)

    for (const key in mainObject) {
        // console.log(key, mainObject[key])
    }

    // console.log(mainObject)
    return names;
}

getAllNames();

// Send a post request
const postForm = document.querySelector('#post');
postForm.addEventListener('submit', async event => {
    event.preventDefault();

    const stringToPost = postForm.querySelector('input').value;
    const url = BASE_URL + '/clara.json';

    const options = {
        method: "POST",
        body: JSON.stringify({ newData: stringToPost }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    
    getNodesUnderName()
        .then(displayNodes);
})


// hämta alla noder under ditt namn
// Ta bort en nod på firebase när man klickar på den

async function getNodesUnderName() {
    const response = await fetch(BASE_URL + '/clara.json');
    const nameObj = await response.json();

    console.log(nameObj);
    return nameObj;
}

function displayNodes(nameObj) {
    const div = document.querySelector('#container');
    div.innerHTML = '';

    for (const fireID in nameObj) {
        const h1 = document.createElement('h1');
        h1.id = fireID;
        h1.innerText = nameObj[fireID].newData;

        div.append(h1);

        console.log(fireID, nameObj[fireID]);

        h1.addEventListener('click', async event => {
            // console.log(event.target.id )

            const url = BASE_URL + '/clara/' + event.target.id + '.json';
            console.log(url)

            const response = await fetch(url, { method: 'DELETE' });
            const data = await response.json();

            getNodesUnderName()
                .then(displayNodes);
        })
    }
}

getNodesUnderName()
    .then(displayNodes);