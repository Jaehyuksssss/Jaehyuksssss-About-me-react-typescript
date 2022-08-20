import React from 'react'
import styled from 'styled-components'
import { MainLinkParams } from './MainLinkInfo'

interface Props {
  data: MainLinkParams
}

const MainLinkList = ({ data }: Props) => {
  return (
    <>
      <ListContents>
        <Img src={data.src} />
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
`

const Img = styled.img`
  background-size: cover;
  opacity: 0.4;
  :hover {
    opacity: 100;
  }
`
