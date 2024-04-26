import styled from "styled-components";


export const Container = styled.div`
  background-color: #0F52BA;
  padding: 30px 10%;
`;

export const NavBar = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavTitle = styled.div`
    display: flex;
    gap: 5px;
`

export const NavTitleH1 = styled.h1`
    color: #FFFFFF;
    font-size: 40px;
`

export const NavTitleP = styled.p`
    margin-top: 20px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 300;
`


export const NavButton = styled.button`
    border: none;
    display: flex;
    width: 90px;
    align-items: center;
    justify-content: center;
    color: #000000;
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 10px 14px;
    font-weight: 700;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color .3s ease;
    font-size:18px;
    gap: 15px;
    &:hover {
        background-color: #8a8a8a;
    }
`
