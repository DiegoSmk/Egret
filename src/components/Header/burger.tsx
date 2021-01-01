// Burger for little screen ---------------------------------------------------------
import React, { useState } from 'react'
import styled from 'styled-components'
import SmoothScrolling from '../../utils/smoothScrolling'
import {
  NavButton,
  OptionsContainer,
  MobileInf,
  Avatar,
  HeaderBurger
} from './styles'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from '../details/button'
// interfaces -----------------------------------------------------------------------
interface OpenClose {
  open: true | false
}
interface LinksProps {
  name: string
}
// Function -------------------------------------------------------------------------
// TO DO a function that will take the values in{props.name} to be used by other components
function navToTitle(name: string) {
  return `#${name}`
}

// LinkScroll -----------------------------------------------------------------------
function LinkScroll(props: LinksProps) {
  return (
    <NavButton>
      <a
        className="id-scroll btn-inv"
        href={navToTitle(props.name)}
        onClick={() => {
          SmoothScrolling.scrollTo(props.name)
        }}
      >
        {props.name}
      </a>
    </NavButton>
  )
}
// CSS - RightNav -------------------------------------------------------------------
const Ul = styled.ul`
  float: right;
  margin-right: 20px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    margin-right: 0px;
    flex-flow: column nowrap;
    background-color: ${props => props.theme.colors.rsNinha};
    position: fixed;
    transform: ${({ open }: OpenClose) =>
      open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    /* width: 300px; */
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`
// JSX RightNav ---------------------------------------------------------------------
// TODO - Portfolio - about - team
const RightNav = ({ open }: OpenClose) => {
  const [session, loading] = useSession()
  return (
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <Ul open={open} className="navbar-right">
        <LinkScroll name="Service" />
        <LinkScroll name="Timeline" />
        <LinkScroll name="Contact" />
        {!session && (
          <OptionsContainer>
            <Button onClick={(): Promise<void> => signIn()}>Sign in</Button>
          </OptionsContainer>
        )}
        {session && (
          <HeaderBurger>
            <OptionsContainer>
              <Avatar>
                <img src="/images/logoIcon.svg"></img>
              </Avatar>
              <MobileInf>
                {session.user.email} <br />
              </MobileInf>
              <Button onClick={(): Promise<void> => signOut()}>Sign out</Button>
            </OptionsContainer>
          </HeaderBurger>
        )}
      </Ul>
    </div>
  )
}

// CSS - Burger ---------------------------------------------------------------------
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }: OpenClose) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
// JSX - Burger ---------------------------------------------------------------------
const Burger = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}

// Export ---------------------------------------------------------------------------
export default Burger
