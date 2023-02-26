import Message from "../components/Message"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import {auth, db, } from '../utils/firebase'
import { toast } from "react-toastify"

export default function Details(){
    const router = useRouter();
    const routeData = router.query;
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState([]);
    console.log({...routeData});
    console.log(router);

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
                    <button className="text-sm bg-cyan-500 text-white py-2 px-4">Submit</button>
                </div>
                <div className="py-6">
                    <h2 className="font-bold"> Comments</h2>
                    {setAllMessages.map(message => (
                        <div>
                            
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}