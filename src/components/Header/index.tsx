import React from 'react'
import Link from 'next/link'
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
          <Link href="/" passHref>
            <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
          </Link>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <Burger />
      </HeaderWrapper>
    </Container>
  )
}

export default Header
