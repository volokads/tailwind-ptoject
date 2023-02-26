import {auth, db} from '../utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { collection } from 'firebase/firestore'

export default function Post(){
    //form state
    const [post,setPost] = useState({description: ''})

    // submit post
    const submitPost = async(e)=>{
        e.preventDefault()
        //make a new post
        const collectionRef= collection
    }
 
    const route = useRouter();

    return(
        <div className='my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto'>
            <form onSubmit={submitPost}>
                <h1 className='text-2xl font-bold'>Create a new post</h1>
                <div className='py-2'>
                    <h3 className='text-lg font-medium py-2'>Description</h3>
                    <textarea 
                    onChange={(e)=> setPost({...post, description: e.target.value})}
                    value={post.description} 
                    className='h-48 w-full bg-gray-800 text-white rounded-lg text-sm'>
                    </textarea>
                    <p 
                        className={`${post.description.length > 300 ? "text-red-600" : 'text-cyan-600'}  font-medium text-sm`}>
                        {post.description.length}/300
                    </p>
                </div>
                <button 
                    type='submit' 
                    className='w-full bg-cyan-600 text-white font-medium py-2 my-2 rounded-lg text-sm'>
                    Submit
                </button>
            </form>
        </div>
    )
}