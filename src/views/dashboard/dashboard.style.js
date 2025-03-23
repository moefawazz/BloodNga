import styled from "styled-components";

export const MainDiv=styled.div`
margin-right:1rem;
width:15%;
height:100%;
border-right:1px solid black;
position:fixed;
left:0;
display:flex;
align-items:center;
flex-direction:column;

`
export const ItemHolder=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:3rem;
border-bottom:1px solid black;
`

export const RightSide=styled.div`

margin-left:15rem;

`
export const SearchInput = styled.input`
  width: 80%;
  max-width: 300px;
  margin-top:1rem;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 16px;
`;