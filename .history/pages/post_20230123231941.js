import {auth, db} from '../utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Post(){
    const route = useRouter();

    return(
        <div>
            <form>
                <h1>Create a new post</h1>
            </form>
        </div>
    )
}