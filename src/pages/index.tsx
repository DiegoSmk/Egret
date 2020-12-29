import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { signIn, signOut, useSession } from 'next-auth/client'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home(): JSX.Element {
  const [session, loading] = useSession()
  return (
    <Layout>
      <Title>text</Title>

      {!session && (
        <div>
          Not signed in <br />
          <button onClick={(): Promise<void> => signIn()}>Sign in</button>
        </div>
      )}
      {session && (
        <div>
          Signed in as {session.user.email} <br />
          <button onClick={(): Promise<void> => signOut()}>Sign out</button>
        </div>
      )}
    </Layout>
  )
}
