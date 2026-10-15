'use client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { createContext, useEffect, useState } from 'react'

type userType = {
  name: string
  email: string
  id: string
  image?: string
}

type userContextType = {
  user: userType | null | undefined
  setUser: (user: userType) => void
}

export const userDataContext = createContext<userContextType | undefined>(undefined)

function UserContext({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<userType | null | undefined>(null)
  const session = useSession()

  const data = {
    user,
    setUser: setUser as (user: userType) => void,
  }

  useEffect(() => {
    async function getUser() {
      try {
        const result = await axios.get("/api/user")
        setUser(result.data)
      } catch (error) {
        console.log(error)
      }
    }

    if (session?.status === "authenticated") {
      getUser()
    } else if (session?.status === "unauthenticated") {
      setUser(null)
    }
  }, [session?.status])

  return (
    <userDataContext.Provider value={data}>
      {children}
    </userDataContext.Provider>
  )
}

export default UserContext
