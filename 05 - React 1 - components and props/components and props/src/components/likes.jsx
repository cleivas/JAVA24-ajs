export function Likes({likes}){
    
    // Bara för att visa att det är det här resultatet från map, en array med li-element
    // const likeElements = [<li>Sami</li>, <li>Gymma</li>, <li>Jobba</li>];

    return (
        <ol>
            {/* Callbackfunction i map returnerar ett li-element per element i arrayen likes */}

            {likes.map( like => <li key={like}>{like}</li> )}
            
            {/* {likeElements} */}
        </ol>
    )
}