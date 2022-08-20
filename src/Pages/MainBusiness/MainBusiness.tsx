import React from "react";
import styled from "styled-components";
import MovieContent from "./MovieContent";

const MainBusiness = () => {
  return (
    <Business>
      <MovieContent />
    </Business>
  );
};

export default MainBusiness;

const Business = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 1050px;
  padding: 0;
  background: #000;
  overflow: hidden;
`;
