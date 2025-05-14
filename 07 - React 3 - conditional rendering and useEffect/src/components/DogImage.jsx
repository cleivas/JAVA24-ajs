import { useEffect, useState } from "react";
import { fetchAllBreeds, fetchDogImage } from "../api/dogapi";

export function DogImage(){
    const [breed, setBreed] = useState('dhole');
    const [breeds, setBreeds] = useState([]);
    const [imgUrl, setImgUrl] = useState('');
    
    let tempBreed = '';

    // Hämta alla hundraser en gång när komponenten renderas första gången
    useEffect(()=>{
        fetchAllBreeds().then( dogBreeds => setBreeds(dogBreeds) )
    }, []);
    
    // Hämta en hundbild vid första renderingen och när statet breed ändras
    useEffect(()=>{ 
        fetchDogImage(breed).then(url => setImgUrl(url) );
    }, [breed])
    
    async function handleSubmit(event){
        event.preventDefault();
        setBreed(tempBreed);
        event.target.reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={event => setBreed(event.target.value)}>
                    {breeds.map( breed => <option value={breed} key={breed}>{breed}</option>)}
                </select>
                <br/>
                <input required type="text" onChange={event => tempBreed = event.target.value }/>
                <button>Sök</button>
            </form>

            <p>{breed}</p>
            {imgUrl && <img src={imgUrl} alt="" />}
        </div>
    )
}