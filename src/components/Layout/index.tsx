import React from 'react'
// imports
import Header from '../Header'
// import Navbar from '../Header/navbar'
// import Sidebar from '../Sidebar'
// imports styles
import { Container, SidebarContainer, ContentContainer } from './styles'

const Layout: React.FC = ({ children }) => (
  <>
    <Header></Header>

    {children}
    <Container>
      {/* <SidebarContainer>text</SidebarContainer> del */}
      {/* <ContentContainer>{children}</ContentContainer> */}
    </Container>
  </>
)

export default Layout
