'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import UserContext from './context/UserContext'

function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <UserContext>
        {children}
      </UserContext>
    </SessionProvider>
  )
}

export default ClientProvider