import styled from "styled-components";

export const WorkContainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
export const WorkItemStyle=styled.div`
width: 50%;
background-color:${props=>props.theme.fontColorCard};
margin-bottom: 20px;
text-align: center;
border-radius: 30px;
padding: 30px 0;
`

