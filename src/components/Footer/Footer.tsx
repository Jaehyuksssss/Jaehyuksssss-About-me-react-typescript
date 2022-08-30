import React from "react";
import styled from "styled-components";
import { FooterContentsParams, FOOTER_INFO } from "./FooterInfo";
import FooterList from "./FooterList";


enum FooterUrlType {
  FACE_BOOK = 'https://www.facebook.com/teamfresh.timf/',
  BLOG = 'https://jaehyuksssss.github.io/',
  YOUTUBE = 'https://www.youtube.com/channel/UCe04X8Shi4hQnUPvhE2TYHA'
}

const Footer = () => {
  return (
    <>
      <MainFooter>
        <FooterContents>
          <Logo>
          <p>JAEHYUK</p>
          </Logo>
          <CompanyInfo>
            <ul>
              {FOOTER_INFO.map((info: FooterContentsParams) => {
                return <FooterList key={''} data={info} />;
              })}
              <CopyRight>
                Copyrightⓒ All Rights Reserved.{''}
                <a href="./admin.php" target="_blank">
                </a>
              </CopyRight>
            </ul>
          </CompanyInfo>
          <SnsLink>
            <ul>
              <li>
                <a href={FooterUrlType.FACE_BOOK}>
                  <i className="xi-facebook" />
                </a>
              </li>
              <li>
                <a href={FooterUrlType.BLOG}>
                  <img src="/public/Imgs/sns_brunch.png" />
                </a>
              </li>
              <li>
                <a href={FooterUrlType.YOUTUBE}>
                  <i className="xi-youtube-play" />
                </a>
              </li>
            </ul>
          </SnsLink>
        </FooterContents>
      </MainFooter>
    </>
  )
};

export default Footer;


const MainFooter = styled.footer`
  display: table;
  width: 100%;
  min-width: 1210px;
  text-align: center;
  background: #191919;
  padding: 50px 0;
  margin: 0;
`;

const FooterContents = styled.div`
  width: 1210px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;
`;

const Logo = styled.div`
p {
  font-family: 'Pretendard';
  color: #fff;
  text-decoration: none;
  font-size: 30px;
  font-weight: 800;
  line-height: 40px;
  width: 110px;
  float: left;
  margin: 20px 0 20px 0;
  }
`;

const CompanyInfo = styled.div`
  clear: both;
  float: left;
  width: 100%;
  text-align: left;
  font-size: 0;
  ul {
    margin: 0;
    padding: 0;
  }
`;

const CopyRight = styled.li`
  width: 100%;
  margin: 10px 0 0 0;
  display: inline-block;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  color: #ccc;
  a {
    font-family: "Pretendard";
    font-weight: 300;
    font-size: 16px;
    text-decoration: none;
    color: #ccc;
  }
`;
const SnsLink = styled.div`
  clear: both;
  float: left;
  width: 100%;
  margin: 30px 0 0 0;
  ul {
    padding: 0;
    margin: 0;
    li {
      float: left;
      width: 40px;
      height: 40px;
      text-align: center;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 100%;
      overflow: hidden;
      padding: 6px 0 0 0;
      margin: 0 10px 0 0;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      :first-child:hover {
        background-color: #18539a;
      }
      :last-child:hover {
        background-color: #ff0100;
      }
      i {
        color: #fff;
        font-size: 27px;
      }
      img {
        height: 27px;
        margin: 1px 0 0 0;
      }
    }
  }
`;
