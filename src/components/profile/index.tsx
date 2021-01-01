import React from 'react'
import {
  Card,
  Header,
  Avatar,
  NameHolder,
  Info,
  Main,
  Followers,
  Container
} from './styles'

interface IProfile {
  name: string
  email: string
}

const ProfileComponents: React.FC<IProfile> = ({ name, email, children }) => {
  return (
    <Container>
      <Card>
        <Header>
          <Avatar></Avatar>
          <NameHolder>
            <h1>{name}</h1>
            <h2>{email}</h2>
          </NameHolder>
        </Header>
        <Info>
          <span></span>
        </Info>
        <Main></Main>
        <Followers></Followers>
      </Card>
      {children}
    </Container>
  )
}

export default ProfileComponents
