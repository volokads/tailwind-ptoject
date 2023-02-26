import {auth, db} from '../utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Post(){
    const route = useRouter();

    return(
        <div className='my-20 p-12 shadow-lg rounded-lg max-w-md'>
            <form>
                <h1>Create a new post</h1>
                <div>
                    <h3>Description</h3>
                    <textarea></textarea>
                    <p>0/300</p>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}