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
