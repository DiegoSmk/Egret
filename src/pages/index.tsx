import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { signIn, signOut, useSession } from 'next-auth/client'
import TitleMainPage from '../components/details/title'
import Service from '../components/main/service'
import { timelineData } from '../content/data'
import Timeline from '../components/main/timeline'

export default function Home(): JSX.Element {
  const [session, loading] = useSession()
  return (
    <Layout>
      <TitleMainPage title="Services" id="Service">
        Egret trabalha no desenvolvimento dos seguintes serviços:
      </TitleMainPage>
      <Service />
      <TitleMainPage title="Timeline" id="Timeline">
        Acompanhe toda evolução nos projetos de Egret
      </TitleMainPage>
      <Timeline datas={timelineData} />

      {/* {!session && (
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
      )} */}
    </Layout>
  )
}
