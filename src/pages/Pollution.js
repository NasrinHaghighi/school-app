import React from 'react'
import Image1 from '../images/polluation1.png'
import Image2 from '../images/polluation2.png'
import Image3 from '../images/polluation3.png'
import Image4 from '../images/polluation4.png'
import Image5 from '../images/polluation5.png'



function Pollution() {
  return (
    <div className='mainDiv'>
    <h1>Pollution</h1>
    <div>By : Henrique , Pedro </div>
    <br/>
    <p>Pollution is harmful and causes changes to the environment. These changes occur due to the
introduction of substances or energy into the environment and can cause damage to the ecosystem
and also to human health.</p>
    <br/>
    <p>Pollution can cause pathological problems, environmental destruction and climate change. It can
also cause diseases such as respiratory and skin problems, allergies, hepatitis, mycosis, diarrhea,
otitis and deafness.</p>
<br/>
<p>The main causes of pollution are: vehicle emissions, the burning of fossil fuels, open burning of
garbage waste, wildfires and volcanic eruptions.</p>
<br/>
<h1>Main types of pollution:</h1>
<ul>
<li>Air pollution</li>
<li>water pollution</li>
<li>soil contamination</li>
<li>thermal pollution</li>
<li>light pollution</li>
<li>radioactive contamination</li>
</ul>
<div className='imgeDiv'>
    <img src={Image1} width='400px' height='300px'/> 
    <br/>
    <img src={Image2} width='400px' height='300px'/>
    <br/>
    <img src={Image3} width='400px' height='300px'/>
    <br/>
    <img src={Image4} width='400px' height='300px'/>
    <img src={Image5} width='400px' height='300px'/>
    
    </div>  
    

</div>
  )
}

export default Pollution