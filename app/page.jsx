"use client"

import Login from '@/components/Login'
import ChatScreen from '@/components/ChatScreen'
import { useSession } from 'next-auth/react'

const Home = () => {

   const {data: session} = useSession()
  return (
    <section className='flex flex-row pt-10 grow'> 
          
            {session?.user ? <ChatScreen/> : <Login/> }
          <div className={`basis-3/5 flex flex-col`}>
            <p className='place-self-center text-2xl'>Novus ChatApp</p>
            <div className='chat-pane flex flex-col'>
               <p className='place-self-center'>HomePage</p>
            </div>
            
          </div>
  
    </section>
   
  )
}

export default Home
