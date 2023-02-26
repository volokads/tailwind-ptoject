import Message from "../components/Message"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import {auth, db} from '../utils/firebase'
import { toast } from "react-toastify"

export default function Details(){
    const router = useRouter()
    const routeData = router.query 
    const [message, setMe]
    return(
        <div></div>
    )
}