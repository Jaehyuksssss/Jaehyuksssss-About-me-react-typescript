
import React from "react";
import styled from "styled-components";

interface Props {
  key: string;
  id: string;
  src?: string;
}

const SlideImg = ({ src }: Props) => {
  return <Img src={src} alt="" />;
};

export default SlideImg;

const Img = styled.img`
top: 50%;
left: 50%;
width: 100%;
height: 100vh;
z-index: 1;
`;
