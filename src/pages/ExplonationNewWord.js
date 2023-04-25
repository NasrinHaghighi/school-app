import React from 'react'
import Image1 from '../images/Exploration1.png'
import Image2 from '../images/Exploration2.jpg'
import Image3 from '../images/Exploration3.jpg'
import Image4 from '../images/Exploration4.jpg'
function ExplonationNewWord() {
  return (
    <div className='mainDiv'>
        <h1>Exploration of new worlds</h1>
        <div>By : Tomás.R , Tresa, Rogério </div>
        <br/>
        <p>To explore new worlds, it is necessary to have an interest in space-related subjects, but also money, which is essential for space exploration. It requires a significant amount of funding and expertise to construct and monitor equipment and materials.</p>
        <br/>
        <p>In the near future, the human race will return to the moon and also to Mars, so we need ways to explore these so-called "new worlds." The European Space Agency (ESA) launched a competition called Moon Camp to engage younger minds in designing parts of a possible space station on the moon. These designs can be found in various parts of a real model of:</p>
        <ul>
    <li>rockets</li>
    <li>lunar bases (a way for astronauts to live for periods similar to those they spend on the ISS)
</li>
    <li>lunar rover</li>
    <li>etc.</li>
  </ul>
  <br/>
  <p>One of the private companies that is most dedicated to this topic is SpaceX, owned by a billionaire named Elon Musk, who invests a lot of money in space exploration, something that is quite important, because one day, our planet may not be habitable and by exploring new planets and moons, we can ensure the survival of the human species.</p>
  <br/>
  <p>One of Humanity's greatest challenges is finding water in a liquid state. Every year, many probes and technical instruments are sent out, useful discovery after discovery, to build a better future and, perhaps, a future astro that will take the human planet the title of Home.</p>

  <div className='imgeDiv'>
        <img src={Image1} width='400px' height='300px'/> 
        <br/>
        <img src={Image2} width='400px' height='300px'/>
        <br/>
        <img src={Image3} width='400px' height='300px'/>
        <br/>
        <img src={Image4} width='400px' height='300px'/>
        </div>  
    </div>
  )
}

export default ExplonationNewWord