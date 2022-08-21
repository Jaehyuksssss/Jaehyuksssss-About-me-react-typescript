import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MainLinkParams } from './MainLinkInfo'

interface Props {
  data: MainLinkParams
}

const MainLinkList = ({ data }: Props) => {
  return (
    <>
      <ListContents>
        <Link to={data.path}>
          <Img src={data.src} />
        </Link>
        <p>{data.title}</p>
      </ListContents>
    </>
  )
}

export default MainLinkList

const ListContents = styled.div`
  position: relative;
  float: left;
  width: 30.33%;
  height: 500px;
  margin: 0 1.5%;
  border-radius: 15px;
  background: #333;
  overflow: hidden;
  cursor: pointer;

  p {
    position: absolute;
    font-family: 'Pretendard';
    font-size: 30px;
    font-weight: 800;
    line-height: 40px;
    width: 110px;
    color: #fff;
    text-decoration: none;
    top: 80%;
    left: 35%;
    justify-items: legacy;
  }
`

const Img = styled.img`
  position: absolute;
  height: 500px;
  width: 100%;
  background-size: cover;
  opacity: 0.4;
  :hover {
    opacity: 100;
  }
`
