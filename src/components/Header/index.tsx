import React from 'react'
import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar
} from './styles'

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src="/images/logoIcon.svg"></Icon>
          <Avatar>
            <img src="/images/logoIcon.svg"></img>
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  )
}

export default Header
