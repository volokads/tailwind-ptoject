import {auth} from '../utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Dashboard(){
    const route = useRouter()
    const [user, loading] = useAuthState(auth)
    //see if user is logged in
    const getData= async()=>{
        if(loading) return;
        if(!user) return route.push('/auth/login');
    }



    return(
        <div>
            <h1> Your posts</h1>
            <div>posts</div>
            <button onClick={()=>auth.signOut()}>Sign Out</button>
        </div>
    )
}