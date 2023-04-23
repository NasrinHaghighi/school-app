import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import  {Container,Title,CarouselItem} from './style'

function Slider() {
  return (
   <Container>
     <Carousel>
      <CarouselItem>
       <Title>Eschool</Title>
       
      </CarouselItem>
      <CarouselItem>
       <Title>Eschool</Title>
       
      </CarouselItem>
      <CarouselItem>
       <Title>Eschool</Title>
       
      </CarouselItem>
      </Carousel>
   </Container>
  )
}

export default Slider