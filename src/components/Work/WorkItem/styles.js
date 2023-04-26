import styled from "styled-components";
import { Link } from 'react-router-dom'

export const WorkItemConatiner=styled.div`
background-color:${props=>props.theme.footerColor};
padding: 50px;
margin-bottom:30px;
font-size:25px;
border-radius: 30px;
width: 40%;
text-align: center;

`
export const StyledLink=styled(Link)`
color: #ffff;
text-decoration: none;
&:hover{
    color: #ffff;
}

`
export const Members=styled.div`
text-align: center;
`

export const ImageDiv=styled.div`
width: 80px;
height: 80px;
line-height: 80px;
border-radius: 50%;
overflow: hidden;

`