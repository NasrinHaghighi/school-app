import React from 'react'
import {WorkContainer, WorkItemStyle} from './style'
import { Link } from "react-router-dom";


const arr=[
    {id:1,tit:'eschool', name:'portugal', members:['Amir', 'Joa', 'Maria']},
    {id:2,tit:'University', name:'portugal', members:['Amir', 'Joa', 'Maria']},

]
function Work() {
  return (
    <WorkContainer>
    {arr.map((item)=>{
        return <WorkItemStyle>
              <Link to={item.tit}>{item.tit}</Link>
            </WorkItemStyle>
    })}
    </WorkContainer>
  )
}

export default Work