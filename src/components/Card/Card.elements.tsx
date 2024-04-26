import styled from "styled-components";


export const CardContainer = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  height: 350px;
  width: 217px;
  border-radius: 12px;
`;
export const CardPhoto = styled.img`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left: 53px;
    margin-top: 18px;
    object-fit: cover;  
    border-radius: 12px;
`
export const CardDivTtile = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`
export const CardTitle = styled.span`
    line-height: 19px;
    font-size: 16px;
    font-weight: 400;
    padding: 1px;
`
export const CardPriceDiv = styled.div`
    border: none;
    display: flex;
    width: 70px;
    height: 26px;
    display: flex;
    align-items: center;
    color: #ffffff;
    background-color: #373737;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color .3s ease;
    &:hover {
        background-color: #8a8a8a;
    }
`
export const CardPrice = styled.span`
    padding: 10px;
`
export const CardDescriptionDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 107px;
    padding: 10px;
`
export const CardButtonDiv = styled.div`
    display: flex;
    align-items: center;
    width: 217px;
    height: 40px;
`
export const CardButton = styled.button`
    border: none;
    color: #ffffff;
    background-color: #0F52BA;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 10px 10px;
    gap: 5px;
    cursor: pointer;
    transition: background-color .3s ease;
    &:hover {
        background-color: #063b8b;
    }
`