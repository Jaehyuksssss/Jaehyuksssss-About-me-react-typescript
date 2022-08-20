import React from "react";
import styled from "styled-components";

const MainIntroduce = () => {
  return (
    <Introduce>
     UI, UX , 그리고 성능 최적화에 대해서 고민합니다.
      <br></br>
      커뮤니케이션 능력의 중요성을 아는 개발자가 되기 위해 노력합니다.
    </Introduce>
  );
};

export default MainIntroduce;

const Introduce = styled.div`
  width: 100%;
  padding: 200px 0;
  background: rgba(0, 0, 0, 0.03);
  overflow: hidden;
  font-family: "Pretendard";
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  color: #000;
`;
