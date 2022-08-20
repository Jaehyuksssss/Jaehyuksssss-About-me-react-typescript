import React from 'react';
import styled from "styled-components";


const SliderButton = () => {
    return (
        <SlidePagination>
           <button>1</button>
           <button>2</button>
           <button>3</button>
        </SlidePagination>
    );
};

export default SliderButton;

const SlidePagination = styled.div`
    button{
        cursor: pointer;
        position: relative;
        margin-right:5px;
        left:15%;
        z-index: 1;
        width: 45px;
        height: 7px;
        font-size: 0;
        float: left;
        overflow: hidden;
        border-radius: 100px;
    }`