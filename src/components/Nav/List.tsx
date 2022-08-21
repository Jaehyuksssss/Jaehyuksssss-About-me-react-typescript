import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NavItemsParams } from './NavItems'
import ServiceDrop from './ServiceDrop'

interface Props {
  data: NavItemsParams
}

const List = ({ data }: Props) => {
  const [dropdown, setDropdown] = useState<boolean>(false)

  return (
    <>
      <SubItem
        key={data.id}
        className={data.cName}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <Link to={data.path}>{data.title}</Link>
        {dropdown && <ServiceDrop data={data.downList} />}
      </SubItem>
    </>
  )
}

export default List

const SubItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  clear: both;
  width: 80%;
  text-align: center;
  margin: 0;
  cursor: pointer;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 300;
  line-height: 40px;
  color: #fff;
  text-decoration: none;
  ul {
    padding: 0;
    list-style: none;
  }
`
