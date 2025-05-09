import { createRoot } from "react-dom/client";
import { ProfileCard } from "./components/profilecard";


const users = [
    {
        name: 'Sheroq',
        age: 26,
        likes: ['Sami', 'Gymma', 'Jobba'],
        imgUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFJLbsjU6tLnw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725030691225?e=2147483647&v=beta&t=ZfGvFDr7gQCpF4wIYPfgcGjaB9e6xzdJ3ENHC1LYpW4'
    },
    {
        name: 'Maryam',
        age: 21,
        likes: ['Frida', 'Stinky', 'Carlos'],
        imgUrl: 'https://c8.alamy.com/comp/MR0G79/random-pictures-MR0G79.jpg'
    }
]

function App(){
    return(
        <div> 
            {users.map(user => <ProfileCard key={user.name} user={user}/> ) }
        </div>
    )
}

const root = createRoot( document.querySelector('#root') );
root.render(<App/>);