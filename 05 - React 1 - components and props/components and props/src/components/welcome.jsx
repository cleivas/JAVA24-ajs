export function Welcome({name, age}){
   
    return(
        <div>
            <h1>Welcome, {name}!</h1>
            <p>Du är {age*12} månader ung.</p>
        </div>
    )
}