export default function Button({text}){

    function handleClick(event){
        console.log(event.target.innerText);
        console.log(text);
    }

    return (
        <button onClick={handleClick} >{text}</button>
    )
}
