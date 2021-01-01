import React from 'react'
import ProfileComponents from '../components/profile'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from '../components/details/button'
import { NextPage } from 'next'
import NothingHere from '../components/Layout/nothingHere'

const Profile = (): JSX.Element => {
  const [session, loading] = useSession()
  return (
    <>
      {!session && (
        <NothingHere>
          <Button onClick={(): Promise<void> => signIn()}>Sign in</Button>
        </NothingHere>
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
