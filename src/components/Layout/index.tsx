import React from 'react'
// imports
import Header from '../Header'
import Sidebar from '../Sidebar'
// imports styles
import { Container, SidebarContainer, ContentContainer } from './styles'

const Layout: React.FC = ({ children }) => (
  <>
    <Header></Header>
    <Container>
      <SidebarContainer>
        <Sidebar></Sidebar>
      </SidebarContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  </>
)

export default Layout
