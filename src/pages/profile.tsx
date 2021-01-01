import React from 'react'
import ProfileComponents from '../components/profile'
import { signIn, signOut, useSession } from 'next-auth/client'

const Profile = () => {
  const [session, loading] = useSession()
  return (
    <>
      {!session && (
        <div>
          Not signed in <br />
          <button onClick={(): Promise<void> => signIn()}>Sign in</button>
        </div>
      )}
      {session && (
        <ProfileComponents
          name={session.user.name}
          email={session.user.email}
        ></ProfileComponents>
      )}
    </>
  )
}

export default Profile
