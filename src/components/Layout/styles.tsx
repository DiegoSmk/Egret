import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 14.3% 0;
  background-color: ${props => props.theme.colors.grayStander};
`

export const SidebarContainer = styled.div`
  flex: 0 0 250px;
  @media (max-width: 768px) {
    display: none;
    flex: 0;
  }
`

export const ContentContainer = styled.div`
  margin: 0 auto;
`
