import styled from 'styled-components'

export const Container = styled.div`
  display: block;
`

export const Card = styled.div`
  margin: 12vh auto;
  border-radius: 5px;
  overflow: hidden;
  width: 450px;
  padding: 15px 25px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`
export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Avatar = styled.div`
  border-radius: 40px;
  width: 60px;
  height: 60px;
  border: 5px solid #fff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  margin-right: 25px;
`
export const NameHolder = styled.div`
  display: block;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
  font-weight: lighter;
  color: #3b3a3a;
  font-size: 20px;
`
export const Main = styled.div`
  margin-bottom: 5px;
`
export const Followers = styled.div`
  background-color: #f8f9f9;
  margin: 0px -25px;
  display: flex;
  justify-content: space-around;
  padding: 13px;
  text-align: center;
  color: #6e6e6e;
  border-top: 1px solid #eaeaea;
`
