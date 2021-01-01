import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { ContainerNothingHere } from './styles'
import { NavButton } from '../details/button'

const NothingHere: NextPage = ({ children }) => {
  return (
    <ContainerNothingHere>
      <span>Nothing Here</span>
      <Link href="/">
        <a>Return</a>
      </Link>
      <Link href="/register" passHref>
        <NavButton>
          <a>Register</a>
        </NavButton>
      </Link>
      {children}
    </ContainerNothingHere>
  )
}

export default NothingHere
