import Message from "../components/Message"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import {auth, db} from '../utils/firebase'
import { toast } from "react-toastify"

export default function Details(){
    const router = useRouter()
    const routeData = router.query 
    const [message, setMessage] = useState('')
    const [allMessages, setAllMessages] = useState([])
    console.log({...routeData});

    return(
        <div>
            <Message {...routeData}></Message>
            <div>
                <div>
                    <input 
                        onChange={(e)=>setMessage(e.target.value)} 
                        type='text' 
                        value={message} 
                        placeholder='send the message'
                        className='bg-gray-800'
                    />
                </div>
            </div>
        </div>
    )
}