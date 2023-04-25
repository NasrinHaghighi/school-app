import React from 'react'
import { Link } from 'react-router-dom'
import {WorkItemConatiner, StyledLink, Members, ImageDiv} from './styles'



function WorkItem({item}) {
  console.log(item)
  return (
    <WorkItemConatiner>
        <StyledLink to={item.tit} >
          <h1>{item.tit}</h1>
          <Members>
          {item.members.map((i, index)=>{
            return <span key={index}>{i}  {index !== item.members.length - 1 && ","} </span>
          })}
          </Members>
           <ImageDiv>
            <img src={item.image} style={{width:' 80px' , height: '90px'}}/>
          </ImageDiv> 
        </StyledLink>
    </WorkItemConatiner>
  )
}

export default WorkItem