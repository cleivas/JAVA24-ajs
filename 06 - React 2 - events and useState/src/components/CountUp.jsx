export function CountUp({setDigit}){
    function handleClick(){

        // PreDigit innehåller det aktuella värdet av statet
        // Det som callbackfunktionen returnera blir det nya värdet av statet
        // 
        setDigit( preDigit => preDigit+1  )
        }
    return (
        <button onClick={ handleClick } >+</button>
    )
}