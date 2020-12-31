import { NextPage } from 'next'
import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './styles'

const Navbar: NextPage = () => {
  return (
    <>
      <Nav>
        <NavLink href="/">
          <h1>LOGO</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink href="">About</NavLink>
          <NavLink href="">Service</NavLink>
          <NavLink href="">Contact Us</NavLink>
          <NavLink href="">Sign Up</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink href="">aaa</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
