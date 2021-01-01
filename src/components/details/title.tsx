import React from 'react'
import styled from 'styled-components'

interface ITitleMainPage {
  title: string
  children: React.ReactNode
  id?: string
}

const TitleStyle = styled.div`
  background-color: ${props => props.theme.colors.backgroundNav};
  border-top: 3px solid ${props => props.theme.colors.background};
  padding-top: 90px;

  .ts {
    text-align: center;
    color: ${props => props.theme.colors.background};
    text-align: center;
  }
  .title-name {
    font-size: 45px;
  }

  .resume {
    padding-bottom: 75px;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
  }
`

const TitleMainPage: React.FC<ITitleMainPage> = ({ title, children, id }) => (
  <TitleStyle id={id}>
    <div className="ts">
      <h2 className="title-name">{title}</h2>
      <h3 className="resume">{children}</h3>
    </div>
  </TitleStyle>
)

export default TitleMainPage
