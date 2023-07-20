"use client"
import React from 'react'


import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Login = () => {

    const {data: session} = useSession

    const [providers, setProviders] = useState(null)



  useEffect(()=>{
    (async () => {
        const res = await getProviders();
        setProviders(res);
      })();
  },[])
  return (
    <div className="basis-3/5 flex flex-col basis-2/5">
            <p className='place-self-center text-2xl'>Login with Google</p>
            <div>
        {
            session?.user ? (
                <button type='button' onClick={signOut}>Sign Out</button>
            ):(
               <>
                {
                    providers &&

                    Object.values(providers).map((provider) => (
                        <button
                         className='place-self-center mt-20'
                          type='button'
                          key={provider.name}
                          onClick={() => {
                            signIn(provider.id);
                          }}
                      
                        >
                          Sign in
                        </button>
                      ))
                }
               </> 
            )
        }
    </div>
          </div>
  )
}

export default Login
