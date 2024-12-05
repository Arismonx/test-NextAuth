
'use client'
import { useSession,signOut } from 'next-auth/react'

export default function Profile() {
    const { data: session , status } = useSession()
    console.log('Session: ',session)
    console.log('Status: ',status)
    return (
        status === 'authenticated' &&
        session.user &&(
        <div className="flex h-screen items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-md">
                <p>
                    Welcome, <b>{session.user.name}!</b>
                </p>
                <p>Email: {session.user.email}</p>
                <p>Role: {session.user.role} </p>
                <button
                onClick={() => signOut({ callbackUrl: '/' })}
                    className="w-full bg-blue-500 text-white py-2 rounded"
                >
                    Logout
                </button>
            </div>
        </div>
        )
    )
}