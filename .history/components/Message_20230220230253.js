import { Children } from "react";

export default function Message({children, avatar, username, description}){
    return(
        <div className='bg-white p-8 border-b-2 rounded-lg'>
            <div className='flex items-center'>
                <img src={avatar} alt='avatar'/>
                <h2>{username}</h2>
            </div>
            <div>
                <p>Description</p>
            </div>
            {children}
        </div>
    )
}