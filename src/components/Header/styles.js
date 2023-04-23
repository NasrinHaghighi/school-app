import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container =styled.div`
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;

`
export const Logo =styled.div`
font-size: 45px;
color:${props=>props.theme.linkColor};
`
export const List =styled.div`
display: flex;
@media (max-width: 1400px) {
 display: none;
  }
`
export const StyledLink = styled(Link)`
color:#fff;
text-decoration: none;
margin-right: 70px;
position: relative;
&:after {
    width: 100%;
    height: 3px;
    background-color:${props=>props.theme.linkColor};
    position: absolute;
  top: 35px;
    left: 0%;
    content: "";
    opacity: 0;
    transition: all ease 0.3s;
  }
&.active{
    color: ${props=>props.theme.linkColor};
    &:after{
    opacity: 1;
  }
}
`;