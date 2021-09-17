import React from 'react';
import styled from "styled-components";

const TopSection = () => {
    const TopSectionContainer = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0 ;
        background-color: #1756dd32;
        display: flex !important;
        flex-direction: column;
        align-items: center;
        padding-top: 13%;
        z-index: 99;
    `
    const Logo = styled.div`
        margin: 0;
        color: #fff;
        font-weight: 800;
        font-size: 80px;
    `
    const Slogan = styled.div`
        margin: 0;
        color: #fff;
        font-weight: 700;
        font-size: 30px;
        margin-top: 10px;
    `
    return ( 
        <TopSectionContainer>
            <Logo> Global Warming</Logo>
            <Slogan>Keep it cool for safe living</Slogan>
        </TopSectionContainer>
     );
}
 
export default TopSection;