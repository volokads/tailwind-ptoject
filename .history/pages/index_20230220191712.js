import Head from 'next/head'
import Message  from '../components/Message'
import { useEffect, useState } from 'react'
import {db} from '../utils/firebase'
import {  collection, query, orderBy } from 'firebase/firestore'

export default function Home() {
  // create a state with all posts
  const [allPosts, setAllPosts] = useState([])

  const getPosts = async ()=>{
    const collectionRef = collection(db,'posts')
    const q = query(collectionRef, orderBy('timestamp'))
  }


  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-12 text-lg font-medium">
        <h2>See what other people are saying</h2>
        <Message/>
      </div>
    </div>
  )
}
