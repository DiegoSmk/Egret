import React from 'react'
// imports
import Header from '../Header'
// import Navbar from '../Header/navbar'
// import Sidebar from '../Sidebar'
// imports styles
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import { Container, SidebarContainer, ContentContainer } from './styles'

const Layout: React.FC = ({ children }) => (
  <>
    <Header></Header>

    {/* <Container>
      <SidebarContainer>
        <Sidebar></Sidebar>
      </SidebarContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container> */}
  </>
)

export default Layout
