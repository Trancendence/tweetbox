import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 30px;
text-align: center;
justify-content: center
`
export const ButtonLoadMore = styled.button`
height: 50px;
width: 200px;
margin: 30px auto;
display: block;
padding: 15px 15px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: calc(22 / 18);
text-transform: uppercase;
:hover{
    background: #5CD3A8;
}
`