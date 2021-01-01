import React from 'react'
import styled from 'styled-components'

interface ITimeline {
  datas: ITimeLineItem[]
}
interface ITimeLineItem {
  text?: string
  date: string
  category: {
    tag: string
  }
  link?: {
    url: string
    text: string
  }
}

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${props => props.theme.colors.backgroundNav};

  * {
    box-sizing: border-box;
  }
  ::after {
    background-color: ${props => props.theme.colors.rsNinha};
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }

  .timeline-item {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    position: relative;
    margin: 10px 0;
    width: 50%;
  }

  .timeline-item:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
  }

  .timeline-item-content {
    box-shadow: 0 8px 6px -6px ${props => props.theme.colors.shadow};
    background-color: ${props => props.theme.colors.bgDark};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 15px;
    position: relative;
    width: 400px;
    max-width: 70%;
    text-align: right;
    border: 2px solid ${props => props.theme.colors.blueLight};
  }

  .timeline-item-content::after {
    content: ' ';
    background-color: ${props => props.theme.colors.bgDark};
    position: absolute;
    right: -10px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
    border-right: 2px solid ${props => props.theme.colors.blueLight};
    border-top: 2px solid ${props => props.theme.colors.blueLight};
  }

  .timeline-item:nth-child(odd) .timeline-item-content {
    text-align: left;
    align-items: flex-start;
  }

  .timeline-item:nth-child(odd) .timeline-item-content::after {
    right: auto;
    left: -10px;
    border-right: 0px;
    border-top: 0px;
    border-left: 2px solid ${props => props.theme.colors.blueLight};
    border-bottom: 2px solid ${props => props.theme.colors.blueLight};
  }

  .timeline-item-content .tag {
    color: ${props => props.theme.colors.text};
    font-size: 12px;
    font-weight: bold;
    top: 5px;
    left: 5px;
    letter-spacing: 1px;
    padding: 5px;
    position: absolute;
    text-transform: uppercase;
  }

  .timeline-item:nth-child(odd) .timeline-item-content .tag {
    left: auto;
    right: 5px;
  }

  .timeline-item-content time {
    color: ${props => props.theme.colors.blueLight};
    font-size: 12px;
    font-weight: bold;
  }

  .timeline-item-content p {
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0;
    max-width: 250px;
  }

  .timeline-item-content a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
  }

  .timeline-item-content a::after {
    content: ' ►';
    font-size: 12px;
  }

  .timeline-item-content .circle {
    background-color: #fff;
    border: 3px solid ${props => props.theme.colors.rsNinha};
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    right: -40px;
    width: 20px;
    height: 20px;
    z-index: 100;
  }

  .timeline-item:nth-child(odd) .timeline-item-content .circle {
    right: auto;
    left: -40px;
  }

  @media only screen and (max-width: 1023px) {
    .timeline-item-content {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 767px) {
    .timeline-item-content,
    .timeline-item:nth-child(odd) .timeline-item-content {
      padding: 15px 10px;
      text-align: center;
      align-items: center;
    }

    .timeline-item-content .tag {
      width: calc(100% - 10px);
      text-align: center;
    }

    .timeline-item-content time {
      margin-top: 20px;
    }

    .timeline-item-content a {
      text-decoration: underline;
    }

    .timeline-item-content a::after {
      display: none;
    }
  }
`

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
)

const Timeline: React.FC<ITimeline> = ({ datas }) =>
  datas.length > 0 && (
    <TimelineContainer>
      {datas.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </TimelineContainer>
  )

export default Timeline
