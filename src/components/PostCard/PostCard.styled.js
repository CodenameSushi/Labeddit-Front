import styled from "styled-components";

export const PostContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2vh;

width: 360px;

padding: 12px;

margin-top: 2vh;

text-align: left;

font-family: 'IBM Plex Sans', sans-serif;
font-weight: 400;

background-color: #FBFBFB;

border: 1px solid #E0E0E0;
border-radius: 12px;

span{
    color: #6F6F6F;
    font-size: 0.75rem;
    margin-left: 0;
}

p{
    color: black;
    font-size: 1.125rem;
}

`

export const PostButtonsContainer = styled.div`
display: flex;
margin-left: 0;
gap: 12px;

`

export const VoteButtonDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 12px;
border: 1px solid #E0E0E0;
border-radius: 16px;
padding: 4px;

button{
    border: none;
    background-color: transparent;
    display: flex;
}



span{
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.563rem;
    font-weight: 700;
}

`
export const CommentButtonDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 12px;
border: 1px solid #E0E0E0;
border-radius: 16px;
padding: 4px 10px 4px 10px;

button{
    border: none;
    background-color: transparent;
    display: flex;
}



span{
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.563rem;
    font-weight: 400;
}

`