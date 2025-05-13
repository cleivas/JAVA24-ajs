export function Child({isDarkMode, changeDarkMode}){

    function handleClick(event){
        console.log(event.target.innerText)

        // Här anropas setCssClass som tillhör Parentkomponenten
        changeDarkMode(isDarkMode ? 'dark' : '');
    }   

    return(
        <button onClick={handleClick}>{ isDarkMode ? 'Dark' : 'Light'}</button>
    )
}