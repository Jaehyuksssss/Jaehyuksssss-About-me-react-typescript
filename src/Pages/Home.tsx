import React, { useEffect, useState } from 'react'
import MainLink from './MainLink/MainLink'
import MainIntroduce from './MainIntroduce'
import MainBusiness from './MainBusiness/MainBusiness'
import MainImageText from '../components/Slide/MainImageText'
import SlideImg from '../components/Slide/SlideImg'
import styled from 'styled-components'
import Slider from '../components/Slide/Slider'

interface Props {
  srcImg: string
  id: string
  key: number
  index: number
}

const Home = () => {
  return (
    <Container>
      <Slider />
      <MainIntroduce />
      <MainBusiness />
      <MainLink />
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
`
