import React from 'react'
import Image1 from '../images/diniz2.jpg'
import Image2 from '../images/diniz1.jpg'



function GeologicalHeritage() {
  return (
    <div className='mainDiv'>
        <h1>Geological Heritage</h1>
        <br/>
        <p>The geological heritage contains all the elements that constitute geodiversity. There are several types of rocks, fossils of very varied types and minerals.
  Part of the Earth's geological history is in the Geological Heritage.
</p>
<br/>
<p>
The science that studies everything in Geological Heritage is Geology.
Geology is one of the studies of the Earth and its evolution where it is studied:
</p>
<ul>
    <li>The minerals</li>
    <li>The rocks</li>
    <li>The fossils</li>
    <li>The landforms</li>
    <li>The changes that occurred from the origin to the present day</li>
</ul>
<p>  In addition, geology contributed to the discovery of the approximate age of the Earth, which is 4.6 billion years.</p>
<br/>
<p> To study geodiversity, different scales must be considered.</p>
<p>  The global scale is composed of the history of the Earth and the tectonic plates, fundamental to understand the current geological diversity.</p>
<p> The local scale refers to the materials, processes and landforms that make up the abiotic portion of the planet; they are the elements of geodiversity.</p>
<p>These elements can be described according to values:</p>
<ul>
    <li>Intrinsic</li>
    <li>Scientific</li>
    <li>Cultural</li>
    <li>Educational</li>
    <li>Aesthetics</li>
    <li>Economical</li>
    <li>And functional</li>
</ul> 
<br/>
<p>The management of geodiversity and geological heritage is carried out by the branch of geosciences called Geoconservation. For this, it is necessary to develop a series of steps.</p>

<ul>
    <li>Geoconservation in a structure that has a diagnosis that collects data</li>
    <li>Conservation, evaluation of legal aspects, monitoring</li>
</ul> 
        
      <div className='imgeDiv'>
        <img src={Image1} width='400px' height='300px'/> <img src={Image2} width='400px' height='300px'/>
        </div>  
    </div>
  )
}

export default GeologicalHeritage