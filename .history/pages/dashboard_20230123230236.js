import {auth} from '../utils/firebase'
import {useAuthState} from 'next/router'

export default function Dashboard(){
    return(
        <div>
            <h1> Your posts</h1>
            <div>posts</div>
            <button onClick={()=>auth.signOut()}>Sign Out</button>
        </div>
    )
}