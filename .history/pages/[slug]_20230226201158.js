import Message from "../components/Message"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import {auth, db, } from '../utils/firebase'
import { toast } from "react-toastify"
import { arrayUnion, doc, updateDoc, Timestamp, getDoc, onSnapshot } from "firebase/firestore"

export default function Details(){
    const router = useRouter();
    const routeData = router.query;
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState([]);

    const submitMessage = async()=>{
        // check if the user is logged
        if(!auth.currentUser) return router.push('/auth/login')
        if(!message){
            toast.error("Don't leave message empty",{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
            })
            return
        }
        const docRef = doc(db, 'posts', routeData.id)
        await updateDoc(docRef, {
            comments: arrayUnion({
                message,
                avatar: auth.currentUser.photoURL,
                userName: auth.currentUser.displayName,
                time: Timestamp.now(),
            })
        })
        setMessage("")
    }
    //get comments

    const getComments = async()=>{
        const docRef = doc(db, 'posts', routeData.id)
        const unsubscribe = onSnapshot(docRef, (snapshot))
        const docSnap = await getDoc(docRef)
        setAllMessages(docSnap.data().comments)
    }

    useEffect(()=>{
        if(!router.isReady)return
        getComments()
    },[])
    return(
        <div>
            <Message {...routeData}></Message>
            <div className='my-4'>
                <div className="flex">
                    <input 
                        onChange={(e)=>setMessage(e.target.value)} 
                        type='text' 
                        value={message} 
                        placeholder='send the message'
                        className='bg-gray-800 w-full p-2 text-white text-sm'
                    />
                    <button onClick={submitMessage} className="text-sm bg-cyan-500 text-white py-2 px-4">Submit</button>
                </div>
                <div className="py-6">
                    <h2 className="font-bold"> Comments</h2>
                    {allMessages?.map(message => (
                        <div key={message.time} className="bg-white p-4 my-4 border-2">
                            <div className='flex items-center gap-2 mb-4 '>
                                <img className='w-10 rounded-full' src={message.avatar} alt={message.userName}/>
                                <h2>{message.userName}</h2>
                            </div>
                            <div>
                                <h2>{message.message}</h2>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}