import React from 'react'
import {Container,Logo, List, StyledLink} from './styles'
import {useLocation} from 'react-router-dom';
import School from '../../images/Logo_AEM.jpg'
import School2 from '../../images/Logo_PEBI.png'

function Header() {
    const location = useLocation();
    const pathname=location.pathname
  return (
    <Container>
   
  <Logo><img src={School}/></Logo>

  <List>
    
  <StyledLink  to='/' className={pathname === '/' ? 'active' : ''}>  Home</StyledLink>
  <StyledLink  to='/work' className={pathname === '/work' ? 'active' : ''}>Works</StyledLink>
  <StyledLink  to='/dislikes' className={pathname === '/dislikes' ? 'active' : ''}>About</StyledLink>
 

  </List> 


<Logo><img src={School2} width='150px' height='80px'/></Logo>
 </Container>
  )
}

export default Header