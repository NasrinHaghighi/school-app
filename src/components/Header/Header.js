import React from 'react'
import {Container,Logo, List, StyledLink} from './styles'
import {useLocation} from 'react-router-dom';



function Header() {
    const location = useLocation();
    const pathname=location.pathname
  return (
    <Container>
   
  <Logo>LOGO</Logo>

  <List>
    
  <StyledLink  to='/' className={pathname === '/' ? 'active' : ''}>  Home</StyledLink>
  <StyledLink  to='/work' className={pathname === '/work' ? 'active' : ''}>Works</StyledLink>
  <StyledLink  to='/dislikes' className={pathname === '/dislikes' ? 'active' : ''}>About</StyledLink>
 

  </List> 


<Logo>LOGO</Logo>
 </Container>
  )
}

export default Header