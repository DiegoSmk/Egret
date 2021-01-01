import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 14.3% 0;
  background-color: ${props => props.theme.colors.grayStander};
`
export const ContainerNothingHere = styled.section`
  /* width: calc(100%-20rem);
  height: 20rem;
  margin: 20rem;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center; */
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.rsNinha};
  margin: 12vh auto;
  border-radius: 5px;
  overflow: hidden;
  width: 450px;
  height: 20rem;
  padding: 15px 25px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  button {
    margin-top: 1rem;
  }

  span {
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;
  }

  li a {
    background: ${props => props.theme.colors.red};
    box-shadow: 0 8px 6px -6px ${props => props.theme.colors.shadow};

    :hover {
      background-color: ${props => props.theme.colors.background};
    }
  }
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
