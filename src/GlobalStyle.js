import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle`
*{
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
}

`

export const Header = styled.header`
height: 50px;
max-width: 450px;
min-width: 360px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background-color: #EDEDED;
justify-self: flex-start;s

img{
    width: 33%;
    height: 28px;
}
a{
    width: 33%;
    text-align: end;
    color: #4088CB;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    :hover{
        cursor: pointer;
    }
}
div{
    width: 33%;

    button{
        border: none;
        cursor: pointer;
    }
}

`

export const ButtonSignup = styled.button`
width: 360px;
height: 51px;
border-radius: 27px;
background-color: white;
border: 1px solid #FE7E02;
color: #FE7E02;
font-family: 'Noto Sans', sans-serif;
font-weight: 700;
font-size: 1.125rem;

:hover{
    cursor: pointer;
}


`
export const ButtonLogin = styled.button`
width: 360px;
height: 51px;
border-radius: 27px;
background: linear-gradient(0.25turn,#FF6489,#F9B24E);
border: none;
color: white;
font-family: 'Noto Sans', sans-serif;
font-size: 1.125rem;
font-weight: 700;

:hover{
    cursor: pointer;
}

`

export const InputStyled = styled.input`
    height: 60px;
    width: 360px;
    padding: 12px;
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    font-family: 'Noto Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
`


export const MainScreen = styled.main`
min-height:100vh;
min-width: 360px;
max-width: 500px;
display: flex;
flex-direction: column;
justify-content: flex-start;

`
