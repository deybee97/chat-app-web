"use client"

import Link from "next/link"
import Image from "next/image"

import { useEffect, useState } from "react"
import { signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {

  const {data: session} = useSession()

  return (
   <nav className="flex flex-row justify-between">
    <Link href="/"> 
        <p>NovusUI</p>
    </Link>
    <div>
        {
            session?.user && (
                <button type='button' onClick={signOut}>Sign Out</button>
            )
        }
    </div>
   </nav>
  )
}

export default Nav
