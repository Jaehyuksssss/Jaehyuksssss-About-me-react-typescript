import React from 'react'
import styled from 'styled-components'


const MovieContent = () => {
  return (
    <Movie>
      <video autoPlay muted loop>
        <source
          src="/public/Imgs/AdobeStock_338405770.vod.mov"
          type="video/mp4"
        />
      </video>
    </Movie>
  )
}

export default MovieContent

const Movie = styled.div`
  width: 100%;
  top: 50%;
  left: 50%;
  height: 1400px;
  z-index: 1;
  opacity: 0.8;
  video {
    width: 100%;
    height:90%;
  }
`
