import styled from "styled-components";

export const CartDiv = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    margin-left: 5%;
    width: 410px;
    height: 10%;
    background-color: #fff;
    border-radius: 12px;
`

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 30px;
    top: -10px;
    position: relative;
`

export const CartContainerQtd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const CartContainerLabel = styled.div`

`

export const CartContainerInputs = styled.div`
    display: flex;
    border: 1px solid;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

export const Button = styled.input`
    border: none;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    padding: 1px;
    background-color: #fff;
    z-index: 1;

`

export const Input = styled.input`
    width: 15px;
    border: none;
    display: flex;
    text-align: center;
`

export const CartPrice = styled.span`
    font-weight: 700;
`

export const CartRemove = styled.div`
    display: flex;
    position: relative;
    top: -10px; 
    left: 50%;
`

export const CartFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    position: absolute;
    bottom:0%;
    width: 100%;
    margin-left: -6px;
    padding: 20px;
`

export const ButtonCart = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: transparent;
    border-radius: 12px;
    font-weight: 700;
    cursor: pointer;
    font-size:18px;
    gap: 15px;
`

export const CartFooterTotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    position: absolute;
    bottom:0%;
    width: 100%;
    margin-left: -6px;
    padding: 20px;
`

export const CartFooterTotal = styled.span`
    position: relative;
    top: -50px;
    font-weight: 700;
    font-size: 28px;
    color: #fff;
`