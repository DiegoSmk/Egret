// header of service initial page ---------------------------------------------------
import React from 'react'
import styled from 'styled-components'
import { MdPeople, MdModeEdit, MdCasino } from 'react-icons/md'
import { IconBaseProps } from 'react-icons'

// INTERFACE ________________________________________________________________________
interface PropsTitle {
  title: string
  icon: IconBaseProps
}

// CSS ------------------------------------------------------------------------------
const SectionSvc = styled.section`
  padding: 100px 0;
  padding-top: 10px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.colors.backgroundNav};
  border-bottom: 3px ${props => props.theme.colors.blueLine} solid;

  .container {
    display: table;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  h2.section-heading {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 40px;
  }

  h3.section-subheading {
    margin-bottom: 75px;
    text-transform: none;
    font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
  }

  .row {
    color: #000;
    font-size: 25px;
    line-height: 20px;
    text-size-adjust: 100%;
  }

  .center {
    height: 151px;
    text-align: center;
  }

  @media (min-width: 768px) {
    #services {
      padding: 150px 0;
    }
  }

  .service-heading {
    margin: 15px 0;
    text-transform: none;
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  .table-table {
  }
  @media (min-width: 992px) {
    .table-table {
      width: 33.33333333%;
      float: left;
    }
  }
`
// JSX ------------------------------------------------------------------------------
const Table: React.FC<PropsTitle> = props => {
  return (
    <div className="table-table">
      <span className="fa-stack fa-4x">
        <i className="fa fa-circle fa-stack-2x text-primary"></i>
        <i className="table-icon">{props.icon}</i>
      </span>
      <h4 className="service-heading">{props.title}</h4>
      <p className="text-muted">{props.children}</p>
    </div>
  )
}

const Service = (): JSX.Element => {
  return (
    <SectionSvc>
      <div className="container">
        <div className="row text-center">
          <Table title={'.NEST'} icon={<MdPeople />}>
            Uma rede Social que tem o objetivo de se ligar aos serviços da Egret
          </Table>
          <Table title={'.NIB'} icon={<MdCasino />}>
            New Improved Build - Um nova maneira de jogar o RPG clássico
            on-line.
          </Table>
          <Table title={'.BOOK'} icon={<MdModeEdit />}>
            Um projeto ousado de construção comunitária de livros (Histórias)
          </Table>
        </div>
      </div>
    </SectionSvc>
  )
}
// Export ---------------------------------------------------------------------------
export default Service

// <header>
//   <div className="container">
//     <div className="intro-text">
//       <div className="intro-text-in">Olá</div>
//       <div className="intro-text-random">
//         Cada sonho que você deixa pra trás, é um pedaço do seu futuro que
//         deixa de existir.
//       </div>
//       <div className="intro-author-random">Steve Jobs</div>
//       <a href="#services" className="page-scroll btn btn-xl">
//         Service
//       </a>
//     </div>
//   </div>
// </header>
