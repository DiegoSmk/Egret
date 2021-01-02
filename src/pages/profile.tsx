import React from 'react'
import ProfileComponents from '../components/profile'
import { useSession } from 'next-auth/client'
import Router from 'next/router'
import Loading from '../components/details/loading'

const Profile = (): JSX.Element => {
  // verify user connected - INIT
  // Don't forget of the -
  // import { getSession, useSession } from 'next-auth/client'
  // and import Router from 'next/router'
  const [session, loading] = useSession()

  if (loading) {
    return <Loading />
  }

  if (!loading && !session) {
    Router.push('/auth/signin')
  }
  // verify user connected - END

  return (
    <>
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
