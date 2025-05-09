import { Likes } from "./likes";
import { ProfilePic } from "./profilepic";
import { Welcome } from "./welcome";

export function ProfileCard({user}){

    return(
        <div>
            <ProfilePic imgUrl={user.imgUrl}/>
            <Welcome name={user.name} age={user.age}/>
            <Likes likes={user.likes}/>
        </div>
    )
}