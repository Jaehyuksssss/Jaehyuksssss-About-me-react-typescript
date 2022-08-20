import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ListParams } from "./NavItems";


interface Props {
  data: ListParams[] | undefined;
}

const ServiceDrop = ({ data }: Props) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <SubItem
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {data &&
          data.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.link}
                  onClick={() => setDropdown(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
      </SubItem>
    </>
  );
};

export default ServiceDrop;

const SubItem = styled.ul`
display: table;
width: 140px;
margin: 29px 0 0;
padding: 0;
background: rgba(0,0,0,.5);
box-shadow: 0 2px 2px rgb(0 0 0 / 30%);
transition: all .2s ease;
-webkit-transition: all .2s ease;`