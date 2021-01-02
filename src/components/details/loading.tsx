import React from 'react'
import styled from 'styled-components'

export const LoadSpan = styled.span`
  display: inline-block;
  width: 100px;
  height: 55px;
  position: relative;
  top: 50%;
  background: #fff center no-repeat;
  background-image: url('/images/pen.svg');
  background-size: contain;
  animation: loader 2s infinite ease;

  :before {
    content: '';
    position: absolute;
    top: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 25px solid white;
  }

  :after {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 25px solid white;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(180deg);
    }

    50% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
const Loading = () => {
  return <LoadSpan></LoadSpan>
}

export default Loading
