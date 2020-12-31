import React from 'react'
import Burger from './burger'
import {
  Container,
  HeaderWrapper,
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
      <HeaderWrapper>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <Burger />
        {/* <OptionsContainer>
          <Icon src="/images/logoIcon.svg"></Icon>
          <Avatar>
            <img src="/images/logoIcon.svg"></img>
          </Avatar>
        </OptionsContainer> */}
      </HeaderWrapper>
    </Container>
  )
}

export default Header
