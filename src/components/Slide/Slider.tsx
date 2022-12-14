import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface Slider {
  id: number
  index: number
  srcImg: string
}

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)

  const len = DATA_SLIDER.length

  const moveDot = (index: React.SetStateAction<number>) => {
    setSlideIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(slideIndex => (slideIndex === len ? 1 : slideIndex + 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [slideIndex])

  return (
    <SliderImg>
      {DATA_SLIDER.map(({ id, srcImg }) => {
        return (
          <div
            key={id}
            className={slideIndex === id ? 'slide-active-anim' : 'slide'}
          >
            <img src={srcImg} />
          </div>
        )
      })}
      <ContextBtn>
        <SlidePagination>
          {Array.from({ length: 3 }).map((item, index) => (
            <button
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot-active' : 'dot'}
            ></button>
          ))}
        </SlidePagination>
      </ContextBtn>
    </SliderImg>
  )
}

const DATA_SLIDER = [
  {
    id: 1,
    srcImg: '/public/Imgs/Img4.jpeg',
    alt: '첫번째 슬라이드'
  },
  {
    id: 2,
    srcImg: '/public/Imgs/Img5.jpeg',
    alt: '두번째 슬라이드'
  },
  {
    id: 3,
    srcImg: '/public/Imgs/Img6.png',
    alt: '세번째 슬라이드'
  }
]

const SliderImg = styled.div`
  display: flex;
  position: relative;
  justify-content:center;
  margin:0;
  top:30%;
  left: 0;
  height: 50vh;
  img{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  z-index: 1;
  
  & .slide-active-anim{
    opacity: 1;
  }
  & .slide{
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
    animation: slide-up 1s ease 0.5s;
  }
}
`
const ContextBtn = styled.div`
  position: absolute;
  top: 40%;
  left: 15%;
  z-index: 10;
`
const SlidePagination = styled.div`
  button {
    cursor: pointer;
    position: relative;
    margin-right: 5px;
    left: 15%;
    z-index: 1;
    width: 45px;
    height: 7px;
    font-size: 0;
    float: left;
    overflow: hidden;
    border-radius: 100px;

    :hover {
      background: #005cdf;
    }
  }

  & .dot-active {
    background: #005cdf;
  }
`
