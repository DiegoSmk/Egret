import styled from 'styled-components'

export const Button = styled.button`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 800;
  background: linear-gradient(
    -135deg,
    ${props => props.theme.colors.grad2},
    ${props => props.theme.colors.grad1}
  );
  padding: 13px 16px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 8px 6px -6px ${props => props.theme.colors.background};
  /* transition: all 0.5s ease; */

  :hover {
    background: #333333;
    box-shadow: 0 8px 6px -6px ${props => props.theme.colors.blueBtn};
  }

  :active {
    letter-spacing: 2px;
    box-shadow: none;
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
