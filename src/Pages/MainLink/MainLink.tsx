import React from 'react'
import styled from 'styled-components'
import { MainLinkParams, LINK_LIST } from './MainLinkInfo'
import MainLinkList from './MainLinkList'

const MainLink = () => {
  return (
    <Section>
      <Contents>
        {LINK_LIST.map((link: MainLinkParams) => {
          return <MainLinkList key={''} data={link} />
        })}
      </Contents>
    </Section>
  )
}

export default MainLink

const Section = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0;
`

const Contents = styled.div`
  /* -webkit-transition: all 0.2s ease; */
  box-sizing: border-box;
  width: 1210px;
  margin: 0 auto;
  padding: 0 30px;
`
