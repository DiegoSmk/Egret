import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
// Old Model
export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background: ${props => props.theme.colors.grayStander};
  /* border-bottom: 1px solid rgba(34, 90, 89, 0.2); */
  border-bottom: 3px solid ${props => props.theme.colors.blueLight};
  z-index: 1000;
  webkit-backdrop-filter: saturate(180%) blur(5px);
  backdrop-filter: saturate(180%) blur(5px);
`

export const HeaderWrapper = styled.header`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const LogoContainer = styled.div`
  display: block;
`

export const LogoIcon = styled.img`
  width: 28px;
  cursor: pointer;
`

export const Logo = styled.img`
  width: 97px;
  margin-left: 4px;
  position: relative;
  top: -2px;
`

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 15px 0;
    border-bottom: 2px solid ${props => props.theme.colors.shadow};

    button {
      margin: 0 5px;
    }
  }
`

export const Icon = styled.img`
  width: 37px;
  height: 37px;
`

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 0 30px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }

  > img {
    width: 40px;
    height: 40px;
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-feature-settings: 'tnum';
    position: relative;
    overflow: hidden;
    color: ${props => props.theme.colors.text};
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    line-height: 32px;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
`
export const NavButton = styled.li`
  display: inline-block;
  line-height: 70px;
  margin: 0 5px;

  a:hover {
    background: ${props => props.theme.colors.blueBtn};
    margin: 16px 0 50px 0;
    padding: 8px 16px;
    color: ${props => props.theme.colors.text};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 8px 6px -6px ${props => props.theme.colors.shadow};
  }

  a {
    color: ${props => props.theme.colors.text};
    font-size: 17px;
    font-weight: 800;
    padding: 8px 16px;
    border-radius: 4px;
    text-transform: uppercase;
  }

  a:active,
  a:hover {
    transition: 0.2s;
  }
  @media screen and (max-width: 768px) {
    :first-child {
      margin-top: 200px;
    }
  }
`

export const HeaderBurger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
  }
`

export const MobileInf = styled.span`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    margin: 15px 0;
    color: ${props => props.theme.colors.shadow};
    font-weight: 800px;
    font-size: 0.8rem;
    justify-content: center;
  }
`
// New Model
// export const Nav = styled.nav`
//   background: #000;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.5rem calc((100vw - 1000px) / 2);
//   z-index: 10;
// `
// type Props = {
//   href: string
//   children: ReactNode
// }

// const NLink = styled.a`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   &.active {
//     color: #15cdfc;
//   }
// `

// export const NavLink = ({ href, children }: Props): JSX.Element => {
//   return (
//     <Link href={href} passHref>
//       <NLink>{children}</NLink>
//     </Link>
//   )
// }

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `
// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `
// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `
// export const NBLink = styled.a`
//   border-radius: 4px;
//   background: #256ce1;
//   padding: 10px 22px;
//   color: #fff;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `

// export const NavBtnLink = ({ href, children }: Props): JSX.Element => {
//   return (
//     <Link href={href} passHref>
//       <NBLink>{children}</NBLink>
//     </Link>
//   )
// }
