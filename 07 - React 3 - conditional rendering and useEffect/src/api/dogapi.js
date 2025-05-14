export async function fetchDogImage(breed){

    const url = `https://dog.ceo/api/breed/${breed}/images/random`;

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)

    return data.message;
}

export async function fetchAllBreeds(){
    const url = 'https://dog.ceo/api/breeds/list/all';
    const response = await fetch(url);
    const data = await response.json();

    return Object.keys(data.message);
}
