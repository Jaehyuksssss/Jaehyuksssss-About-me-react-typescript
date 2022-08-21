import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import List from './List'
import { NavItemsParams, NAV_ITEMS } from './NavItems'

const Navbar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false)

  return (
    <>
      <Nav>
        <Header>
          <NavItems>
            {NAV_ITEMS.map((item: NavItemsParams) => {
              return <List data={item} />
            })}
          </NavItems>
          <Link to="/">
            <p>JAEHYUK</p>
          </Link>
        </Header>
      </Nav>
    </>
  )
}

export default Navbar

const Nav = styled.div`
  position: fixed;
  display: flex;
  background: black;
  justify-content: space-around;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1210px;
  padding: 0;
  text-align: center;
  z-index: 100;
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
`
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1210px;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  text-align: center;
  z-index: 1;
`
const NavItems = styled.ul`
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: 5%;
  left: 0%;
  width: 500px;

  ul {
    margin-right: 20px;
    list-style: none;
    width: 100%;
    display: block;
    padding: 0;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 15px;
  }
  li {
    list-style: none;
  }
  a {
    width: 100%;
    margin-right: 20px;
    font-family: 'Pretendard';
    font-weight: 300;
    font-size: 17px;
    line-height: 30px;
    color: #fff;
    text-decoration: none;
    padding: 0;
  }
`
